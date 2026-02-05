'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

interface ScrollScrambleTextProps {
    text: string;
    className?: string;
    staggerAmount?: number;      // Delay between each character (0-0.02 works well)
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';

export default function ScrollScrambleText({
    text,
    className = '',
    staggerAmount = 0.008,
}: ScrollScrambleTextProps) {
    const containerRef = useRef<HTMLSpanElement>(null);
    // Initialize with the plain text to avoid hydration mismatch (server vs client)
    const [displayContent, setDisplayContent] = useState<string[]>(() => text.split(''));
    const [isMounted, setIsMounted] = useState(false);

    // Track scroll progress - element position relative to viewport
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // "start end" = element's top at viewport's bottom
        // "end start" = element's bottom at viewport's top
        offset: ['start 0.85', 'end 0.15']
    });

    // Smooth out the scroll value for fluid animation
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 25,
        restDelta: 0.001
    });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useMotionValueEvent(smoothProgress, "change", (latest) => {
        // Map progress to a "reveal" amount:
        // - At 0 (element below viewport): scrambled
        // - At 0.5 (element in center): fully revealed  
        // - At 1 (element above viewport): scrambled again

        // Create a plateau effect:
        // 0.0 - 0.2: Fade in / unscramble
        // 0.2 - 0.8: Fully visible / unscrambled
        // 0.8 - 1.0: Fade out / scramble
        let revealAmount = 0;

        if (latest < 0.2) {
            // Linear ramp up 0 to 1
            revealAmount = latest / 0.2;
        } else if (latest > 0.8) {
            // Linear ramp down 1 to 0
            revealAmount = (1 - latest) / 0.2;
        } else {
            // Plateau
            revealAmount = 1;
        }

        const newContent = text.split('').map((char, index) => {
            if (char === ' ') return ' ';

            // Stagger each character slightly
            const charProgress = Math.min(Math.max(
                (revealAmount - (index * staggerAmount)) * (1 + text.length * staggerAmount),
                0
            ), 1);

            if (charProgress >= 0.95) {
                // Fully revealed - show actual character
                return char;
            } else if (charProgress <= 0.05) {
                // Fully scrambled - show random character
                // Use deterministic random based on scroll position for stability
                const seed = Math.floor(latest * 20) + index;
                return CHARS[seed % CHARS.length];
            } else {
                // Transitioning - cycle through characters
                const cyclePosition = Math.floor(charProgress * 8) + index;
                return CHARS[cyclePosition % CHARS.length];
            }
        });

        setDisplayContent(newContent);
    });

    return (
        <span
            ref={containerRef}
            className={`${className} inline-block`}
            aria-label={text}
        >
            <span className={`${!isMounted ? 'opacity-0' : ''}`}>
                {text.split('').map((char, i) => (
                    <span key={i} className="relative inline-block">
                        {/* Phantom stable char to maintain width */}
                        <span className="opacity-0 select-none pointer-events-none">{char}</span>

                        {/* Actual scrambling character */}
                        <span className="absolute left-0 top-0">
                            {displayContent[i] || char}
                        </span>
                    </span>
                ))}
            </span>
        </span>
    );
}
