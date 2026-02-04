'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface ScrambleTextProps {
    text: string;
    className?: string;
    trigger?: 'viewport' | 'hover' | 'mount';
    delay?: number;
    scrambleSpeed?: number;
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function ScrambleText({
    text,
    className = '',
    trigger = 'viewport',
    delay = 0,
    scrambleSpeed = 30
}: ScrambleTextProps) {

    // Initialize with stable text to avoid hydration mismatch
    // We'll scramble immediately on mount if needed
    const [displayText, setDisplayText] = useState(text);
    const [isMounted, setIsMounted] = useState(false);
    const [isScrambling, setIsScrambling] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const hasResolved = useRef(false);

    // Helper to generate random text
    const generateRandomText = (targetText: string) => {
        return targetText.split('').map(char =>
            char === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)]
        ).join('');
    };

    // Handle initialization on client side only
    useEffect(() => {
        setIsMounted(true);
        // If we haven't resolved yet, start in a scrambled state
        if (!hasResolved.current) {
            setDisplayText(generateRandomText(text));
        }
    }, [text]);


    // The "resolve" animation: transitions from random to clear text
    const resolve = () => {
        if (isScrambling || hasResolved.current) return;
        setIsScrambling(true);

        let iteration = 0;
        const totalIterations = text.length;

        intervalRef.current = setInterval(() => {
            setDisplayText(text.split('').map((char, index) => {
                if (char === ' ') return ' ';
                // If we've passed this index, show the real character
                if (index < iteration) return text[index];
                // Otherwise show a random character
                return chars[Math.floor(Math.random() * chars.length)];
            }).join(''));

            // Adjust speed of resolution here. 
            // 1/3 means it takes 3 frames to resolve one character slot roughly.
            iteration += 1 / 3;

            if (iteration >= totalIterations) {
                if (intervalRef.current) clearInterval(intervalRef.current);
                setDisplayText(text);
                setIsScrambling(false);
                hasResolved.current = true;
            }
        }, scrambleSpeed);
    };

    useEffect(() => {
        if (trigger === 'mount' && !hasResolved.current) {
            const timer = setTimeout(() => {
                resolve();
            }, delay);
            return () => clearTimeout(timer);
        }
    }, [trigger, delay]);

    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const handleViewport = (inView: boolean) => {
        if (inView && !hasResolved.current && trigger === 'viewport') {
            setTimeout(() => {
                resolve();
            }, delay);
        }
    };

    const handleMouseEnter = () => {
        if (trigger === 'hover') {
            // Reset to allow re-scrambling on hover if desired, 
            // but for 'resolve' style, usually we might want to just re-trigger or do nothing.
            // If user wants it to scramble AGAIN on hover, we need to reset hasResolved.
            // For now, let's allow re-scrambling on hover for effect.
            hasResolved.current = false;
            resolve();
        }
    };

    return (
        <motion.span
            className={`${className} inline-block whitespace-pre-wrap`}
            onMouseEnter={handleMouseEnter}
            onViewportEnter={() => handleViewport(true)}
            viewport={{ once: true, amount: 0.5 }}
        >
            <span className={`${!isMounted ? 'opacity-0' : ''}`}>
                {text.split('').map((char, index) => (
                    <span key={index} className="relative inline-block">
                        {/* Phantom stable char to set width */}
                        <span className="opacity-0 select-none pointer-events-none">{char}</span>

                        {/* Absolute scrambling char overlaid */}
                        <span className={`absolute left-0 top-0 ${isScrambling ? 'scrambling' : ''}`}>
                            {displayText[index] || char}
                        </span>
                    </span>
                ))}
            </span>
        </motion.span>
    );
}
