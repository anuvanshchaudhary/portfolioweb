'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainerVariants, staggerItemVariants, coinFlipVariants } from '@/utils/animations';
import { EDUCATION } from '@/utils/constants';

export default function EducationWindow() {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
        >
            {/* University */}
            <motion.div variants={staggerItemVariants} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vellore-blue border-2 border-strict-black flex items-center justify-center text-window-white font-black text-xl">
                    V
                </div>
                <div className="flex-1">
                    <h2 className="text-h2 font-black">{EDUCATION.university}</h2>
                    <p className="text-body-lg font-semibold text-vellore-blue">{EDUCATION.degree}</p>
                    <p className="text-body text-text-secondary">Expected Graduation: {EDUCATION.expectedGraduation}</p>
                </div>
            </motion.div>

            {/* CGPA Coin */}
            <motion.div variants={staggerItemVariants} className="py-6">
                <p className="text-body-sm uppercase font-bold text-text-secondary mb-3 tracking-wider">
                    Academic Performance
                </p>
                <div
                    className="relative w-32 h-32 mx-auto cursor-pointer"
                    style={{ perspective: '1000px' }}
                    onMouseEnter={() => setIsFlipped(true)}
                    onMouseLeave={() => setIsFlipped(false)}
                >
                    <motion.div
                        variants={coinFlipVariants}
                        animate={isFlipped ? 'back' : 'front'}
                        className="w-full h-full relative"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        {/* Front */}
                        <div
                            className="absolute inset-0 bg-success-green border-4 border-strict-black flex items-center justify-center"
                            style={{ backfaceVisibility: 'hidden' }}
                        >
                            <span className="text-hero font-black text-window-white">{EDUCATION.cgpa}</span>
                        </div>

                        {/* Back */}
                        <div
                            className="absolute inset-0 bg-vellore-blue border-4 border-strict-black flex items-center justify-center"
                            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                        >
                            <span className="text-h2 font-black text-window-white">CGPA</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* High School */}
            <motion.div variants={staggerItemVariants} className="pt-4 border-t-2 border-strict-black">
                <p className="text-h3 font-bold mb-2">Class XII</p>
                <p className="text-body">{EDUCATION.highSchool.name}</p>
                <p className="text-body text-text-secondary">
                    {EDUCATION.highSchool.year} • {EDUCATION.highSchool.percentage}
                </p>
            </motion.div>
        </motion.div>
    );
}
