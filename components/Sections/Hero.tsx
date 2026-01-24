'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrambleText from '../Effects/ScrambleText';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image constrained behind text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[60vh] -z-10 opacity-50 select-none">
                <div className="relative w-full h-full rounded-full overflow-hidden blur-sm scale-90">
                    <Image
                        src="/images/hero-bg.jpg"
                        alt="Anuvansh Chaudhary"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 1200px"
                    />
                    <div className="absolute inset-0 bg-void/40" />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    {/* Small Label */}
                    <motion.p
                        className="font-mono text-label text-taupe mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        PORTFOLIO 2026
                    </motion.p>

                    {/* Main Headline with Scramble Effect */}
                    <h1 className="text-hero font-header font-bold mb-6">
                        <ScrambleText
                            text="Anuvansh Chaudhary"
                            trigger="mount"
                            delay={800}
                        />
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        className="text-h3 font-header italic text-sandy mb-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        Be creative — Be you
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        className="text-body-lg text-parchment max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        Full-Stack Developer & Innovator building AI tools, assistive hardware,
                        and interactive web experiences.
                    </motion.p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-parchment/30 rounded-full flex justify-center pt-2">
                    <motion.div
                        className="w-1 h-2 bg-terracotta rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
