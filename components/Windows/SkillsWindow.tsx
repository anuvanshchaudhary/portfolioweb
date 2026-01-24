'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '@/utils/constants';
import { applyMagneticOffset } from '@/utils/physics';

export default function SkillsWindow() {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setCursorPos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
            return () => container.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className="bg-strict-black text-matrix-green font-mono p-6 rounded-none min-h-[400px] relative"
        >
            {/* Terminal Prompt */}
            <div className="mb-6">
                <span className="text-window-white">$ </span>
                <span className="text-matrix-green">ls -la skills/</span>
                <span className="inline-block w-2 h-4 bg-matrix-green ml-1 animate-blink" />
            </div>

            {/* Skills Categories */}
            <div className="space-y-6">
                {Object.entries(SKILLS).map(([category, skills]) => (
                    <div key={category}>
                        <p className="text-label uppercase font-bold text-window-white mb-3 tracking-widest">
                            {category}:
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <SkillPill
                                    key={skill}
                                    skill={skill}
                                    cursorPos={cursorPos}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

interface SkillPillProps {
    skill: string;
    cursorPos: { x: number; y: number };
    index: number;
}

function SkillPill({ skill, cursorPos, index }: SkillPillProps) {
    const pillRef = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (pillRef.current) {
            const rect = pillRef.current.getBoundingClientRect();
            const pillCenter = {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
            };

            const magneticOffset = applyMagneticOffset(
                pillCenter.x,
                pillCenter.y,
                cursorPos.x + rect.left,
                cursorPos.y + rect.top,
                100,
                20
            );

            setOffset(magneticOffset);
        }
    }, [cursorPos]);

    return (
        <motion.div
            ref={pillRef}
            animate={{
                x: offset.x,
                y: offset.y,
            }}
            transition={{
                type: 'spring',
                stiffness: 150,
                damping: 15,
            }}
            className="px-4 py-2 border-2 border-matrix-green bg-transparent text-matrix-green text-body-sm font-semibold hover:bg-matrix-green hover:text-strict-black transition-colors cursor-move"
        >
            {skill}
        </motion.div>
    );
}
