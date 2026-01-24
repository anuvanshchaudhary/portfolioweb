'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { scanningLaserVariants } from '@/utils/animations';

export default function ScanningLaser() {
    return (
        <div className="absolute inset-x-0 inset-y-4 pointer-events-none overflow-hidden z-10 opacity-50">
            <motion.div
                variants={scanningLaserVariants}
                animate="animate"
                className="w-full h-0.5 bg-gradient-to-r from-transparent via-gpt-blue to-transparent shadow-[0_0_8px_rgba(0,122,255,0.8)]"
            />
        </div>
    );
}
