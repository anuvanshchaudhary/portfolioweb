'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface MorseCodeRevealProps {
    finalText: string;
    morseText?: string;
}

export default function MorseCodeReveal({ finalText, morseText = '... --- ...' }: MorseCodeRevealProps) {
    const [isHovered, setIsHovered] = useState(false);

    // Simple mapping for demo purposes if morseText not provided
    // real implementation would need a full map

    return (
        <div
            className="inline-block cursor-help relative h-8 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                animate={{ y: isHovered ? -32 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <div className="h-8 flex items-center text-patent-red font-mono text-xl font-bold tracking-widest">
                    {morseText}
                </div>
                <div className="h-8 flex items-center text-success-green font-bold text-lg">
                    {finalText}
                </div>
            </motion.div>
        </div>
    );
}
