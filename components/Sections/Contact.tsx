'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileDown } from 'lucide-react';
import { CONTACT } from '@/utils/constants';

export default function Contact() {
    return (
        <footer className="relative py-section px-4 md:px-6 bg-surface">
            <div className="max-w-6xl mx-auto">
                {/* Rotating "Stay Curious" Badge */}
                <div className="flex justify-center mb-16">
                    <div className="relative w-32 h-32">
                        <svg
                            viewBox="0 0 200 200"
                            className="rotating-badge"
                        >
                            <defs>
                                <path
                                    id="circle"
                                    d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                                />
                            </defs>
                            <text className="fill-terracotta font-mono text-[14px] tracking-widest uppercase">
                                <textPath href="#circle">
                                    Stay Curious • Stay Curious •
                                </textPath>
                            </text>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3 h-3 bg-terracotta rounded-full" />
                        </div>
                    </div>
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    {/* Email */}
                    <motion.a
                        href={`mailto:${CONTACT.email}`}
                        className="group"
                        whileHover={{ x: 10 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <div className="flex items-center gap-4 p-5 md:p-6 border-2 border-parchment/10 hover:border-terracotta transition-colors">
                            <Mail className="w-6 h-6 text-terracotta" />
                            <div>
                                <p className="font-mono text-label-sm md:text-label text-taupe mb-1">EMAIL</p>
                                <p className="text-body-sm md:text-body font-semibold text-parchment group-hover:text-sandy transition-colors break-all">
                                    {CONTACT.email}
                                </p>
                            </div>
                        </div>
                    </motion.a>

                    {/* Resume */}
                    <motion.a
                        href={CONTACT.resume}
                        download
                        className="group"
                        whileHover={{ x: 10 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <div className="flex items-center gap-4 p-5 md:p-6 border-2 border-parchment/10 hover:border-terracotta transition-colors">
                            <FileDown className="w-6 h-6 text-terracotta" />
                            <div>
                                <p className="font-mono text-label-sm md:text-label text-taupe mb-1">RESUME</p>
                                <p className="text-body-sm md:text-body font-semibold text-parchment group-hover:text-sandy transition-colors">
                                    Download PDF
                                </p>
                            </div>
                        </div>
                    </motion.a>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-8 mb-16">
                    <motion.a
                        href={CONTACT.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 rounded-full bg-void border-2 border-parchment/20 flex items-center justify-center hover:bg-parchment hover:border-parchment group transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Linkedin className="w-6 h-6 text-parchment group-hover:text-void transition-colors" />
                    </motion.a>

                    <motion.a
                        href={CONTACT.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 rounded-full bg-void border-2 border-parchment/20 flex items-center justify-center hover:bg-parchment hover:border-parchment group transition-colors"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Github className="w-6 h-6 text-parchment group-hover:text-void transition-colors" />
                    </motion.a>
                </div>

                {/* Footer Text */}
                <div className="text-center space-y-4">
                    <p className="text-body-sm md:text-body text-taupe">
                        Second-year CS student at VIT Vellore
                    </p>
                    <p className="font-mono text-label-sm md:text-label text-taupe">
                        AVAILABLE FOR INTERNSHIPS 2026
                    </p>
                </div>
            </div>
        </footer>
    );
}
