'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function NeonDrawingTracer() {
    return (
        <div className="absolute top-4 right-4 w-16 h-16 pointer-events-none overflow-hidden z-10 opacity-60">
            <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                    <filter id="neon-glow-pink" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="blur1" />
                        <feGaussianBlur stdDeviation="8" result="blur2" />
                        <feMerge>
                            <feMergeNode in="blur2" />
                            <feMergeNode in="blur1" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                {/* A glowing 5-pointed star */}
                <motion.path
                    d="M 50,10 L 63,38 L 93,38 L 69,56 L 78,86 L 50,68 L 22,86 L 31,56 L 7,38 L 37,38 Z"
                    fill="transparent"
                    stroke="#FF007F"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#neon-glow-pink)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                        pathLength: [0, 1, 1, 0], 
                        opacity: [0, 1, 1, 0] 
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.4, 0.6, 1]
                    }}
                />
            </svg>
        </div>
    );
}
