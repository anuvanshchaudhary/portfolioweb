'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';

interface ScrollScrambleTextProps {
    text: string;
    className?: string;
    staggerAmount?: number;
}

function ScrollScrambleTextContent({
    text,
    className = '',
    staggerAmount = 0.02,
}: ScrollScrambleTextProps) {
    const containerRef = useRef<HTMLSpanElement>(null);
    const [displayContent, setDisplayContent] = useState<string[]>(() => text.split(''));

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'start 0.2']
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useMotionValueEvent(smoothProgress, "change", (latest) => {
        const newContent = text.split('').map((char, index) => {
            if (char === ' ') return ' ';

            const staggerDelay = index * staggerAmount;
            const charProgress = Math.min(Math.max(latest - staggerDelay, 0), 1);

            if (charProgress >= 0.1) {
                return char;
            } else if (charProgress <= 0.1) {
                const seed = Math.floor(latest * 50) + index;
                return CHARS[seed % CHARS.length];
            } else {
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
            {text.split('').map((char, i) => (
                <span key={i} className="relative inline-block">
                    <span className="opacity-0 select-none pointer-events-none">{char}</span>
                    <span className="absolute left-0 top-0">
                        {displayContent[i] || char}
                    </span>
                </span>
            ))}
        </span>
    );
}

export default function ScrollScrambleText(props: ScrollScrambleTextProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <span
                className={`${props.className || ''} inline-block`}
                aria-label={props.text}
                suppressHydrationWarning
            >
                {props.text}
            </span>
        );
    }

    return <ScrollScrambleTextContent {...props} />;
}