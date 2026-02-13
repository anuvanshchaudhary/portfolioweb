'use client';

import React from 'react';
import Header from '@/components/Sections/Header';
import Hero from '@/components/Sections/Hero';
import Bio from '@/components/Sections/Bio';

import Education from '@/components/Sections/Education';
import Skills from '@/components/Sections/Skills';
import Projects from '@/components/Sections/Projects';
import Contact from '@/components/Sections/Contact';
import ProgressTracker from '@/components/Effects/ProgressTracker';
import dynamic from 'next/dynamic';

const SectionIndicator = dynamic(() => import('@/components/Effects/SectionIndicator'), { ssr: false });

export default function Home() {
    return (
        <main className="relative">
            {/* Fixed Header */}
            <Header />

            {/* Progress Tracker */}
            <ProgressTracker />

            {/* Section Indicator */}
            <SectionIndicator />

            {/* Hero Section */}
            <section id="hero">
                <Hero />
            </section>

            {/* Bio Section with Lighting Effect */}
            <section id="about">
                <Bio />
            </section>



            {/* Education Section */}
            <section id="education">
                <Education />
            </section>

            {/* Skills Section */}
            <section id="skills">
                <Skills />
            </section>

            {/* Projects Accordion */}
            <section id="projects">
                <Projects />
            </section>

            {/* Contact Footer */}
            <section id="contact">
                <Contact />
            </section>
        </main>
    );
}
