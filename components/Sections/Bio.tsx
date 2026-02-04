"use client";

import React from "react";
import Image from "next/image";
import ContinuousScrollReveal from "../Effects/ContinuousScrollReveal";

const bioParagraphs = [
  "Second-year Computer Science student at VIT Vellore, passionate about creating technology that makes a difference.",
  "I specialize in full-stack development with a focus on AI integration and assistive technology. From building AI-powered PDF tools to patent-pending hardware for individuals with motor impairments.",
  "My work spans web development, hardware prototyping, and everything in between. I believe in learning by building, and building with purpose.",
  "Currently exploring the intersection of artificial intelligence and accessibility, while sharpening my skills in modern web technologies and system design.",
  "Open to internship opportunities where I can contribute to meaningful projects and continue growing as a developer.",
];

export default function Bio() {
  return (
    <section className="py-section px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 md:gap-24 items-center">
          {/* Text Column */}
          <div className="order-2 md:order-1">
            <p className="label-mono text-label-sm md:text-label text-terracotta mb-8 md:mb-12 text-lg md:text-xl">
              ABOUT
            </p>

            <div className="space-y-8">
              <ContinuousScrollReveal paragraphs={bioParagraphs} className="text-body-sm md:text-body-lg" />
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 md:order-2 relative group">
            <div className="relative aspect-[4/5] w-full max-w-[80%] md:max-w-none mx-auto rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-out border border-white/10 shadow-2xl">
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
            <div className="absolute -inset-4 border border-terracotta/20 rounded-2xl -z-10 bg-void/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
