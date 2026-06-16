'use client';

import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { WindowContext } from '../Windows/Window';
import { gravityFallVariants } from '@/utils/animations';
import ScanningLaser from '../Animations/ScanningLaser';
import MorseCodeReveal from '../Animations/MorseCodeReveal';
import NeonDrawingTracer from '../Animations/NeonDrawingTracer';

interface Project {
    id: string;
    title: string;
    description: string;
    icon: string;
    accentColor: string;
    techStack: readonly string[];
    github?: string | null;
    demo?: string;
    patented?: boolean;
}

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const { isGravityActive } = useContext(WindowContext);

    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="border-4 border-strict-black shadow-brutalist hover:shadow-brutalist-hover p-6 bg-window-white transition-shadow relative overflow-hidden"
        >
            {project.id === 'easy-pdf' && <ScanningLaser />}
            {project.id === 'air-canvas' && <NeonDrawingTracer />}

            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
                <div
                    className="w-12 h-12 border-2 border-strict-black flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ backgroundColor: `${project.accentColor}20` }}
                >
                    {project.icon}
                </div>

                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-h3 font-bold">{project.title}</h3>
                        {project.patented && (
                            <span className="px-2 py-1 bg-patent-red text-window-white text-caption font-bold uppercase border border-strict-black">
                                Patented
                            </span>
                        )}
                    </div>

                    {project.id === 'morse-assist' && (
                        <div className="mb-2">
                            <MorseCodeReveal finalText="90%+ ACCURACY" morseText="----. ----- ... -.." />
                        </div>
                    )}

                    <p className="text-body text-text-secondary leading-relaxed">
                        {project.description}
                    </p>
                </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                    <motion.span
                        key={tech}
                        variants={gravityFallVariants}
                        animate={isGravityActive ? "fall" : "initial"}
                        custom={index}
                        className="px-3 py-1 border-2 border-strict-black text-label font-bold uppercase"
                        style={{
                            backgroundColor: `${project.accentColor}20`,
                            color: project.accentColor,
                        }}
                    >
                        {tech}
                    </motion.span>
                ))}
            </div>

            {/* Links */}
            <div className="flex gap-3">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-strict-black text-window-white border-2 border-strict-black hover:bg-window-white hover:text-strict-black transition-colors font-semibold text-body-sm"
                    >
                        <Github size={16} />
                        <span>GitHub</span>
                    </a>
                )}

                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border-2 border-strict-black hover:bg-strict-black hover:text-window-white transition-colors font-semibold text-body-sm"
                        style={{ borderColor: project.accentColor }}
                    >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                    </a>
                )}
            </div>
        </motion.div>
    );
}
