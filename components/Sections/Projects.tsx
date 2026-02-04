'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown } from 'lucide-react';
import ScrambleText from '../Effects/ScrambleText';
import { PROJECTS } from '@/utils/constants';

export default function Projects() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleProject = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section className="py-section px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
                {/* Section Label */}
                <p className="font-mono text-label text-terracotta mb-12">
                    PROJECTS
                </p>

                {/* Project Accordion */}
                <div className="space-y-4">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="border-t border-parchment/10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Project Header (Always Visible) */}
                            <button
                                onClick={() => toggleProject(project.id)}
                                className="w-full py-8 flex items-center justify-between group"
                            >
                                <div className="flex items-center gap-6">
                                    {/* Project Icon */}
                                    <div
                                        className="text-4xl flex-shrink-0"
                                        style={{ filter: 'grayscale(1)' }}
                                    >
                                        {project.icon}
                                    </div>

                                    {/* Project Title with Scramble on Hover */}
                                    <div className="text-left">
                                        <h3 className="text-h3 font-header font-bold text-parchment group-hover:text-sandy transition-colors">
                                            <ScrambleText
                                                text={project.title}
                                                trigger="viewport"
                                            />
                                        </h3>
                                        {'patentPending' in project && project.patentPending && (
                                            <span className="inline-block mt-2 px-3 py-1 bg-terracotta/20 border border-terracotta text-terracotta font-mono text-label">
                                                PATENT PENDING
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Expand Icon */}
                                <motion.div
                                    animate={{ rotate: expandedId === project.id ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="w-6 h-6 text-taupe" />
                                </motion.div>
                            </button>

                            {/* Expanded Content */}
                            <AnimatePresence>
                                {expandedId === project.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-8 pl-0 md:pl-20 space-y-6">
                                            {/* Description */}
                                            <p className="text-body-lg text-taupe leading-relaxed">
                                                {project.description}
                                            </p>

                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-4 py-2 bg-surface border border-parchment/10 text-parchment font-mono text-sm"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Links */}
                                            <div className="flex gap-4">
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 px-8 py-4 bg-terracotta text-parchment hover:bg-sandy transition-colors font-semibold text-lg"
                                                    >
                                                        <Github size={18} />
                                                        <span>View Code</span>
                                                    </a>
                                                )}

                                                {'demo' in project && project.demo && (
                                                    <a
                                                        href={project.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 px-8 py-4 border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-parchment transition-colors font-semibold text-lg"
                                                    >
                                                        <ExternalLink size={18} />
                                                        <span>Live Demo</span>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
