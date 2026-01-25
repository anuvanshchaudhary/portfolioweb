'use client';

import React, { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

interface ScrollRevealBlockProps {
    text: string;
    className?: string;
}

export default function ScrollRevealBlock({ text, className = '' }: ScrollRevealBlockProps) {
    const containerRef = useRef<HTMLParagraphElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 0.8', 'end 0.3']
    });

    // Split by sentences to give a "Line by Line" feel since visual lines are hard to detect reliably in React without layout thrashing
    // We can assume roughly that sentences approximate the user's "line" intent for reading flow.
    const sentences = text.match(/[^.!?]+[.!?]+|\s*$/g)?.filter(s => s.trim().length > 0) || [text];

    return (
        <p ref={containerRef} className={`${className} flex flex-wrap`}>
            {sentences.map((sentence, i) => {
                const start = i / sentences.length;
                const end = start + (1 / sentences.length);

                return (
                    <Sentence key={i} progress={scrollYProgress} range={[start, end]}>
                        {sentence}
                    </Sentence>
                );
            })}
        </p>
    );
}

const Sentence = ({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) => {
    const opacity = useTransform(progress, range, [0.2, 1]);

    return (
        <span className="mr-1 relative">
            <motion.span style={{ opacity }} className="transition-opacity duration-300">
                {children}
            </motion.span>
        </span>
    );
};
