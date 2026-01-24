'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, FileDown } from 'lucide-react';
import { drawerVariants } from '@/utils/animations';
import { CONTACT } from '@/utils/constants';

export default function ConnectDrawer() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDrawer}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[1001] px-8 py-4 bg-strict-black text-window-white border-4 border-strict-black shadow-brutalist font-black text-label uppercase tracking-widest hover:bg-gpt-blue transition-colors"
            >
                {isOpen ? 'CLOSE' : 'CONNECT'}
            </motion.button>

            {/* Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleDrawer}
                            className="fixed inset-0 bg-strict-black z-[999]"
                        />

                        {/* Drawer Content */}
                        <motion.div
                            variants={drawerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="fixed bottom-0 left-0 right-0 h-[300px] bg-strict-black border-t-4 border-strict-black z-[1000] flex flex-col items-center justify-center gap-8 p-8"
                        >
                            {/* Email */}
                            <motion.a
                                href={`mailto:${CONTACT.email}`}
                                whileHover={{ scale: 1.05, x: 10 }}
                                className="flex items-center gap-4 text-window-white hover:text-gpt-blue transition-colors"
                            >
                                <Mail size={48} />
                                <span className="text-h2 font-black">{CONTACT.email}</span>
                            </motion.a>

                            {/* Social Links */}
                            <div className="flex items-center gap-12">
                                <motion.a
                                    href={CONTACT.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="flex flex-col items-center gap-2 text-window-white hover:text-gpt-blue transition-colors"
                                >
                                    <Linkedin size={40} />
                                    <span className="text-h3 font-bold">LINKEDIN</span>
                                </motion.a>

                                <motion.a
                                    href={CONTACT.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="flex flex-col items-center gap-2 text-window-white hover:text-matrix-green transition-colors"
                                >
                                    <Github size={40} />
                                    <span className="text-h3 font-bold">GITHUB</span>
                                </motion.a>

                                <motion.a
                                    href={CONTACT.resume}
                                    download
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="flex flex-col items-center gap-2 text-window-white hover:text-patent-red transition-colors"
                                >
                                    <FileDown size={40} />
                                    <span className="text-h3 font-bold">RESUME</span>
                                </motion.a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
