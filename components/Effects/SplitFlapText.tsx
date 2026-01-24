'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SplitFlapTextProps {
    text: string;
    className?: string;
    speed?: number; // ms per char flip
    delay?: number; // initial delay
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,!?&@() ';

export default function SplitFlapText({ text, className = '', speed = 50, delay = 0, threshold = 0.3 }: SplitFlapTextProps & { threshold?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: threshold });
    const [displayContent, setDisplayContent] = useState<string[]>([]);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        // Initialize with empty or spaces
        setDisplayContent(new Array(text.length).fill(' '));
    }, [text]);

    useEffect(() => {
        if (isInView && !started) {
            const startTimeout = setTimeout(() => {
                setStarted(true);
                startAnimation();
            }, delay);
            return () => clearTimeout(startTimeout);
        }
    }, [isInView, started, delay]);

    const startAnimation = () => {
        const targetChars = text.split('');
        const currentChars = new Array(text.length).fill(' ');
        const activeIndices = new Set<number>();

        // Start all indices
        targetChars.forEach((_, i) => activeIndices.add(i));

        let iterations = 0;
        const maxIterations = 20; // Maximum flips before settling

        const interval = setInterval(() => {
            let complete = true;

            const nextChars = [...currentChars];

            // Update active characters
            activeIndices.forEach(index => {
                const targetChar = targetChars[index];
                const currentChar = currentChars[index];

                if (currentChar === targetChar) {
                    activeIndices.delete(index);
                } else {
                    complete = false;
                    // Random char or next in sequence
                    // For "airport" feel, we can just pick random from ALPHABET
                    const randomChar = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];

                    // Force resolve if too many iterations
                    if (Math.random() > 0.8 || iterations > maxIterations) { // 20% chance to land correctly per tick
                        nextChars[index] = targetChar;
                    } else {
                        nextChars[index] = randomChar;
                    }
                }
            });

            setDisplayContent(nextChars);
            currentChars.splice(0, currentChars.length, ...nextChars); // Update ref array effectively
            iterations++;

            if (complete && activeIndices.size === 0) {
                clearInterval(interval);
            }
        }, speed);
    };

    // For better "split flap" look, we render each char in a box
    return (
        <span ref={ref} className={`inline-block whitespace-pre-wrap ${className}`} aria-label={text}>
            {displayContent.map((char, i) => (
                <span
                    key={i}
                    className="inline-block relative overflow-hidden text-center"
                >
                    <span className="relative z-10">{char}</span>
                    {/* Optional: Add a subtle line or background to mimic the flap if desired via CSS logic here, 
                        but for 'text under about', clean text with the effect is often better than heavy boxes.
                        User asked for "Split Flap / Airport Board effect". 
                        We can add a subtle background class if needed. 
                    */}
                </span>
            ))}
        </span>
    );
}
