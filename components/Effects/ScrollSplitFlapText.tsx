'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';

interface ScrollSplitFlapTextProps {
    text: string;
    className?: string;
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,!?&@() ';

export default function ScrollSplitFlapText({ text, className = '' }: ScrollSplitFlapTextProps) {
    const containerRef = useRef<HTMLSpanElement>(null);
    const [displayContent, setDisplayContent] = useState<string[]>(new Array(text.length).fill(' '));

    // Track scroll progress
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 0.9', 'end 0.5']
    });

    // Smooth out the scroll value for less jittery updates
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 200, damping: 20 });

    useEffect(() => {
        // Subscribe to scroll changes manually since we need to compute characters on the fly
        // and React state isn't great for high-frequency scroll updates, 
        // but for a text effect we need to render the span content.
        // We'll use a frame loop or change listener.

        const unsubscribe = smoothProgress.on("change", (latest) => {
            const newContent = text.split('').map((char, index) => {
                // Calculate "local" progress for this character
                // We stagger them so they don't all resolve at once
                const charProgress = Math.min(Math.max((latest - (index * 0.005)) * 2, 0), 1);

                if (charProgress >= 1) {
                    return char;
                } else if (charProgress <= 0) {
                    return ' '; // Or random char
                } else {
                    // During transition, show random char
                    // To avoid flashing too fast, we could hash it based on progress bucket
                    // or just pick random. Random per frame is "active" but maybe too noisy.
                    // Let's use a deterministic random based on index + rough progress chunk
                    const seed = Math.floor(charProgress * 10);
                    return ALPHABET[(index + seed) % ALPHABET.length];
                }
            });

            setDisplayContent(newContent);
        });

        return () => unsubscribe();
    }, [smoothProgress, text]);

    return (
        <span ref={containerRef} className={`${className} inline-block`}>
            {displayContent.map((char, i) => (
                <span key={i} className="inline-block min-w-[0.3em] text-center">
                    {char}
                </span>
            ))}
        </span>
    );
}
