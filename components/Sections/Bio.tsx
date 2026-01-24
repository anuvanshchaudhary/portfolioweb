'use client';

import React from 'react';
import Image from 'next/image';
import SplitFlapText from '../Effects/SplitFlapText';

const bioParagraphs = [
    "Second-year Computer Science student at VIT Vellore, passionate about creating technology that makes a difference.",
    "I specialize in full-stack development with a focus on AI integration and assistive technology. From building AI-powered PDF tools to patent-pending hardware for individuals with motor impairments.",
    "My work spans web development, hardware prototyping, and everything in between. I believe in learning by building, and building with purpose.",
    "Currently exploring the intersection of artificial intelligence and accessibility, while sharpening my skills in modern web technologies and system design.",
    "Open to internship opportunities where I can contribute to meaningful projects and continue growing as a developer."
];

export default function Bio() {
    return (
        <section className="py-section px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-20 items-start">

                    {/* Text Column */}
                    <div className="order-2 md:order-1">
                        <p className="font-mono text-label text-terracotta mb-8 md:mb-12">
                            ABOUT
                        </p>

                        <div className="space-y-8">
                            {bioParagraphs.map((paragraph, index) => (
                                <div key={index} className="overflow-hidden min-h-[4rem]">
                                    <SplitFlapText
                                        text={paragraph}
                                        className="text-body-lg font-header leading-relaxed text-foreground/90 block"
                                        speed={15}
                                        threshold={0.5} // Trigger when 50% visible
                                        delay={0} // Rely on scroll position
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="order-1 md:order-2 relative group">
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:max-w-none rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-out border border-white/10 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60" />
                            <Image
                                src="/images/profile.png"
                                alt="Profile"
                                fill
                                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                                priority
                            />
                        </div>
                        {/* Decorative elements behind image */}
                        <div className="absolute -inset-4 border border-terracotta/20 rounded-2xl -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                    </div>

                </div>
            </div>
        </section>
    );
}
