'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '@/utils/constants';
import ScrollScrambleText from '@/components/Effects/ScrollScrambleText';

export default function Skills() {
    const skillCategories = [
        { label: 'Languages', skills: SKILLS.LANGUAGES },
        { label: 'Frontend', skills: SKILLS.FRONTEND },
        { label: 'Backend', skills: SKILLS.BACKEND },
        { label: 'Tools', skills: SKILLS.TOOLS },
    ];

    return (
        <section className="py-12 md:py-section px-4 md:px-6 bg-surface">
            <div className="max-w-5xl mx-auto">
                {/* Section Label */}
                <p className="font-mono text-label-sm md:text-label text-terracotta mb-12">
                    SKILLS & TECHNOLOGIES
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                        >
                            <h3 className="text-2xl md:text-h3 font-header font-bold text-parchment mb-2 md:mb-6">
                                <ScrollScrambleText text={category.label} />
                            </h3>
                            <div className="flex flex-wrap gap-2 md:gap-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skill}
                                        className="px-2.5 py-1 md:px-6 md:py-3 bg-void border border-parchment/20 text-parchment hover:border-terracotta hover:text-sandy transition-colors text-sm md:text-body-lg"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
