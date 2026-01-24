'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { springConfigs } from '@/utils/physics';

interface MorseToggleProps {
    isActive: boolean;
    onToggle: () => void;
}

export default function MorseToggle({ isActive, onToggle }: MorseToggleProps) {
    return (
        <button
            onClick={onToggle}
            className={`relative flex items-center gap-3 px-4 py-2 border-2 border-strict-black transition-colors ${isActive ? 'bg-matrix-green/10' : 'bg-window-white'
                }`}
            role="switch"
            aria-checked={isActive}
            aria-label="Toggle Morse Code mode"
        >
            <div className={`w-10 h-6 rounded-full border-2 border-strict-black relative transition-colors ${isActive ? 'bg-matrix-green' : 'bg-blueprint-gray'}`}>
                <motion.div
                    animate={{ x: isActive ? 16 : 2 }}
                    transition={springConfigs.bouncy}
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-window-white border-2 border-strict-black"
                />
            </div>
            <span className="text-label font-bold uppercase tracking-wider">
                Morse Mode
            </span>
        </button>
    );
}
