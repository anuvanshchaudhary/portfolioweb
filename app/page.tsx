'use client';

import React from 'react';
import Header from '@/components/Sections/Header';
import Hero from '@/components/Sections/Hero';
import Bio from '@/components/Sections/Bio';
// import Experience from '@/components/Sections/Experience';
import Education from '@/components/Sections/Education';
import Skills from '@/components/Sections/Skills';
import Projects from '@/components/Sections/Projects';
import Contact from '@/components/Sections/Contact';
import ProgressTracker from '@/components/Effects/ProgressTracker';
import SectionIndicator from '@/components/Effects/SectionIndicator';

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

            {/* Experience Timeline (Horizontal Scroll) */}
            {/* <section id="experience">
                <Experience />
            </section> */}

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
