'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainerVariants, staggerItemVariants } from '@/utils/animations';
import { PROJECTS } from '@/utils/constants';
import ProjectCard from '../Projects/ProjectCard';

export default function ProjectsWindow() {
    return (
        <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
        >
            <motion.h2 variants={staggerItemVariants} className="text-h2 font-black mb-6">
                Featured Projects
            </motion.h2>

            <div className="space-y-6">
                {PROJECTS.map((project) => (
                    <motion.div key={project.id} variants={staggerItemVariants}>
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
