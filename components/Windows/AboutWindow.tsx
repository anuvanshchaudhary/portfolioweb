'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainerVariants, staggerItemVariants } from '@/utils/animations';

export default function AboutWindow() {
    return (
        <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
        >
            <motion.div variants={staggerItemVariants} className="flex items-center gap-4">
                <div className="w-24 h-24 bg-gpt-blue/20 border-4 border-strict-black rounded-full flex items-center justify-center text-4xl">
                    👨‍💻
                </div>
                <div>
                    <h2 className="text-h2 font-black">Anuvansh Chaudhary</h2>
                    <p className="text-body text-text-secondary">Full-Stack Developer & Innovator</p>
                </div>
            </motion.div>

            <motion.div variants={staggerItemVariants} className="space-y-4">
                <p className="text-body-lg leading-relaxed">
                    Second-year CS undergraduate at VIT Vellore, focused on building innovative web and mobile applications that solve real-world problems.
                </p>

                <p className="text-body leading-relaxed text-text-secondary">
                    I specialize in full-stack development with a passion for AI integration and assistive technology.
                    Currently exploring the intersection of hardware and software to create impactful solutions.
                </p>
            </motion.div>

            <motion.div variants={staggerItemVariants} className="pt-4 border-t-2 border-strict-black">
                <p className="text-h3 font-bold mb-3">Current Status</p>
                <div className="flex items-center gap-2 text-body">
                    <span className="text-2xl">🔍</span>
                    <span className="font-semibold">Searching for my love in tech</span>
                </div>
            </motion.div>

            <motion.div variants={staggerItemVariants} className="pt-4">
                <p className="text-h3 font-bold mb-3">Interests</p>
                <div className="flex flex-wrap gap-2">
                    {['Web Development', 'AI/ML', 'Hardware Projects', 'Open Source'].map((interest) => (
                        <span
                            key={interest}
                            className="px-4 py-2 bg-gpt-blue/20 border-2 border-strict-black text-body-sm font-semibold"
                        >
                            {interest}
                        </span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}
