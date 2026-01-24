'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { iconVariants } from '@/utils/animations';

interface DesktopIconProps {
    icon: string;
    label: string;
    onClick: () => void;
}

export default function DesktopIcon({ icon, label, onClick }: DesktopIconProps) {
    return (
        <motion.button
            variants={iconVariants}
            initial="idle"
            whileHover="hover"
            whileTap="tap"
            onClick={onClick}
            className="flex flex-col items-center gap-2 w-20 cursor-pointer group no-select"
            aria-label={`Open ${label} window`}
        >
            {/* Icon */}
            <div className="w-20 h-20 bg-window-white border-4 border-strict-black shadow-brutalist flex items-center justify-center text-4xl group-hover:border-gpt-blue transition-colors">
                {icon}
            </div>

            {/* Label */}
            <span className="text-label font-black uppercase tracking-wider text-strict-black text-center">
                {label}
            </span>
        </motion.button>
    );
}
