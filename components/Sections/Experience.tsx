'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timeline = [
    { year: '2023', title: 'Started at VIT Vellore', description: 'Began B.Tech in Computer Science' },
    { year: '2024', title: 'Morse Assist', description: 'Developed patent-pending assistive device' },
    { year: '2024', title: 'Easy PDF', description: 'Built AI-powered PDF summarization tool' },
    { year: '2025', title: 'Full-Stack Projects', description: 'Expanded web development portfolio' },
    { year: '2026', title: 'Seeking Opportunities', description: 'Open for internships and collaborations' },
];

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !timelineRef.current) return;

        const container = containerRef.current;
        const timeline = timelineRef.current;

        // Calculate how far we need to scroll horizontally
        const scrollWidth = timeline.scrollWidth - container.offsetWidth;

        // Create horizontal scroll animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: 'top top',
                end: () => `+=${scrollWidth + container.offsetHeight}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            }
        });

        tl.to(timeline, {
            x: -scrollWidth,
            ease: 'none'
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen overflow-hidden bg-surface">
            <div className="absolute top-12 left-6">
                <p className="font-mono text-label text-terracotta">
                    EXPERIENCE
                </p>
            </div>

            <div 
                ref={timelineRef} 
                className="flex items-center h-full px-6 gap-24"
                style={{ width: 'fit-content' }}
            >
                {timeline.map((item, index) => (
                    <div key={index} className="flex-shrink-0 w-96">
                        <div className="relative">
                            {/* Year */}
                            <p className="text-hero font-header font-bold text-terracotta/30 mb-4">
                                {item.year}
                            </p>

                            {/* Title */}
                            <h3 className="text-h2 font-header font-bold text-parchment mb-4">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-body-lg text-taupe">
                                {item.description}
                            </p>

                            {/* Decorative Line */}
                            <div className="absolute -left-6 top-0 bottom-0 w-px bg-terracotta/20" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Scroll Hint */}
            <div className="absolute bottom-12 left-6">
                <p className="font-mono text-label text-taupe">
                  SCROLL TO PAN →
                </p>
            </div>
        </section>
    );
}
