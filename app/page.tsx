"use client";

import React from "react";
import Hero from "@/components/Sections/Hero";
import Bio from "@/components/Sections/Bio";
import { Analytics } from "@vercel/analytics/next";

import Education from "@/components/Sections/Education";
import Experience from "@/components/Sections/Experience";
import Skills from "@/components/Sections/Skills";
import Projects from "@/components/Sections/Projects";
import Contact from "@/components/Sections/Contact";
import ProgressTracker from "@/components/Effects/ProgressTracker";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Sections/Header"), {
  ssr: false,
});
const SectionIndicator = dynamic(
  () => import("@/components/Effects/SectionIndicator"),
  { ssr: false },
);

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

      {/* Experience Section */}
      <section id="experience">
        <Experience />
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
