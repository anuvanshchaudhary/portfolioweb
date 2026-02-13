'use client';

import React, { useRef, useMemo } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

interface ContinuousScrollRevealProps {
    paragraphs: string[];
    className?: string;
}

export default function ContinuousScrollReveal({ paragraphs, className = '' }: ContinuousScrollRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress of the ENTIRE container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 0.8', 'end 0.5']
    });

    // Flatten all text into a single list of words to calculate global progress
    const allWords = useMemo(() => {
        return paragraphs.flatMap((para, paraIndex) =>
            para.split(' ').map((word, wordIndex) => ({
                word,
                paraIndex,
                id: `${paraIndex}-${wordIndex}`
            }))
        );
    }, [paragraphs]);

    let wordGlobalIndex = 0;

    return (
        <div ref={containerRef} className={className}>
            {paragraphs.map((paragraph, paraIndex) => (
                <p key={paraIndex} className="mb-3 md:mb-8 font-header leading-relaxed text-foreground flex flex-wrap">
                    {paragraph.split(' ').map((word, wordIndex) => {
                        // Calculate range for this specific word based on its position in the WHOLE text
                        const start = wordGlobalIndex / allWords.length;
                        const end = start + (1 / allWords.length);
                        wordGlobalIndex++;

                        return (
                            <Word
                                key={`${paraIndex}-${wordIndex}`}
                                progress={scrollYProgress}
                                range={[start, end]}
                            >
                                {word}
                            </Word>
                        );
                    })}
                </p>
            ))}
        </div>
    );
}

const Word = ({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) => {
    // Opacity transition for the word
    const opacity = useTransform(progress, range, [0.15, 1]);

    return (
        <span className="mr-[0.25em] relative">
            <motion.span style={{ opacity }} className="transition-colors duration-200">
                {children}
            </motion.span>
        </span>
    );
};
