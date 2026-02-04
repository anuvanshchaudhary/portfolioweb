"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    year: "2028",
    primary: "CGPA: 8.75 • Computer Science",
    secondary: "Bachelor of Technology • Vellore Institute of Technology",
  },
  {
    year: "2023",
    primary: "92% • Senior Secondary",
    secondary: "Class XII • DAV Public School",
  },
  {
    year: "2021",
    primary: "91% • Secondary",
    secondary: "Class X • St. Joseph's Convent School",
  },
];

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !timelineRef.current) return;

    const container = containerRef.current;
    const timeline = timelineRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Desktop: Horizontal Scroll via Pinning
      const scrollWidth = timeline.scrollWidth - container.offsetWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${scrollWidth + container.offsetHeight}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(timeline, {
        x: -scrollWidth,
        ease: "none",
      });
    });

    return () => {
      mm.revert(); // Clean up matchMedia and ScrollTriggers
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative md:h-screen bg-surface"
    >
      <div className="absolute top-12 left-6 z-10">
        <p className="font-mono text-label text-terracotta">EDUCATION</p>
      </div>

      <div
        ref={timelineRef}
        className="flex items-start pt-32 md:pt-48 px-4 md:px-6 gap-6 md:gap-24 overflow-x-auto md:overflow-hidden snap-x snap-mandatory md:snap-none pb-12 md:pb-0 h-full md:w-fit"
      // Remove fixed width style to allow natural flow
      >
        {educationData.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-[85vw] md:w-96 snap-center">
            <div className="relative">
              {/* Year */}
              <p className="text-hero font-header font-bold text-terracotta/30 mb-6">
                {item.year}
              </p>

              {/* Primary (Marks/CGPA - Major) */}
              <h3 className="text-h3 font-header font-bold text-parchment mb-3">
                {item.primary}
              </h3>

              {/* Secondary (Degree - Institution) */}
              <p className="text-body-lg text-taupe leading-relaxed">
                {item.secondary}
              </p>

              {/* Decorative Line */}
              <div className="absolute -left-6 top-2 bottom-2 w-px bg-terracotta/20" />
            </div>
          </div>
        ))}
        {/* Spacer for mobile end scroll */}
        <div className="w-1 md:hidden flex-shrink-0" />
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-12 left-6 hidden md:block">
        <p className="font-mono text-label text-taupe">SCROLL TO PAN →</p>
      </div>

      {/* Mobile Swipe Hint */}
      <div className="absolute bottom-6 left-6 md:hidden">
        <p className="font-mono text-label text-taupe">SWIPE →</p>
      </div>
    </section>
  );
}
