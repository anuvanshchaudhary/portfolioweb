'use client';

import React, { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

interface ScrollRevealTextProps {
    text: string;
    className?: string;
}

export default function ScrollRevealText({ text, className = '' }: ScrollRevealTextProps) {
    const containerRef = useRef<HTMLParagraphElement>(null);

    // Track scroll progress of this container relative to the viewport
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // Start revealing when the top of the text enters the bottom 90% of screen
        // Finish revealing when the bottom of the text reaches the top 25% of screen
        offset: ['start 0.9', 'end 0.25']
    });

    const words = text.split(' ');

    return (
        <p ref={containerRef} className={`${className} flex flex-wrap`}>
            {words.map((word, i) => {
                // Calculate the specific scroll range for this word to light up
                const start = i / words.length;
                const end = start + (1 / words.length);

                return (
                    <Word key={i} progress={scrollYProgress} range={[start, end]}>
                        {word}
                    </Word>
                );
            })}
        </p>
    );
}

const Word = ({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) => {
    // Map the global progress to this word's opacity
    // Transition from 0.15 (dim) to 1.0 (bright)
    const opacity = useTransform(progress, range, [0.15, 1]);

    return (
        <span className="mr-[0.25em] relative">
            <motion.span style={{ opacity }} className="transition-colors duration-200">
                {children}
            </motion.span>
        </span>
    );
};
