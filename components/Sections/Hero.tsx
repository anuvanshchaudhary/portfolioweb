'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrambleText from '../Effects/ScrambleText';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image constrained behind text */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-screen-2xl h-[65vh] -z-10 opacity-50 select-none">
                <div className="relative w-full h-full rounded-full overflow-hidden blur-sm scale-100">
                    <Image
                        src="/images/hero-bg.jpg"
                        alt="Anuvansh Chaudhary"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 1400px" // Updated sizes for performance
                    />
                    <div className="absolute inset-0 bg-void/40" />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[95%] mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    {/* Small Label */}
                    <motion.p
                        className="label-mono text-label-sm md:text-2xl text-taupe mb-6 md:mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        MY PORTFOLIO
                    </motion.p>

                    {/* Main Headline with Scramble Effect */}
                    <h1 className="text-hero-sm md:text-hero font-header font-bold mb-6">
                        <span className="block md:inline">
                            <ScrambleText
                                text="Anuvansh"
                                trigger="mount"
                                delay={800}
                            />
                        </span>
                        <span className="block md:inline md:ml-4">
                            <ScrambleText
                                text="Chaudhary"
                                trigger="mount"
                                delay={900} // Slight delay stagger for effect
                            />
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        className="text-h3-sm md:text-h3 font-header italic text-sandy mb-8 md:mb-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        Be creative — Be you
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        className="text-body-lg-sm md:text-body-lg text-parchment max-w-5xl mx-auto leading-relaxed"
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
                className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex"
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
