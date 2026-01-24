'use client';

import React from 'react';
import Header from '@/components/Sections/Header';
import Hero from '@/components/Sections/Hero';
import Bio from '@/components/Sections/Bio';
import Experience from '@/components/Sections/Experience';
import Skills from '@/components/Sections/Skills';
import Projects from '@/components/Sections/Projects';
import Contact from '@/components/Sections/Contact';
import ProgressTracker from '@/components/Effects/ProgressTracker';

export default function Home() {
    return (
        <main className="relative">
            {/* Fixed Header */}
            <Header />

            {/* Progress Tracker */}
            <ProgressTracker />

            {/* Hero Section */}
            <Hero />

            {/* Bio Section with Lighting Effect */}
            <Bio />

            {/* Experience Timeline (Horizontal Scroll) */}
            <Experience />

            {/* Skills Section */}
            <Skills />

            {/* Projects Accordion */}
            <Projects />

            {/* Contact Footer */}
            <Contact />
        </main>
    );
}
