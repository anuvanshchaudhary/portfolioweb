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
      // Use Math.max to prevent negative values if screen is wider than content
      // Add a larger buffer (400px) to ensure we scroll enough to distinctly see the movement
      const scrollWidth = Math.max(0, timeline.scrollWidth - container.offsetWidth + 400);

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

      // Start from the right (showing 2021) and scroll to left (showing 2028)
      // We animate TO a slight negative value (-50) to give that "extra" push left at the end
      tl.fromTo(timeline,
        { x: -scrollWidth },
        {
          x: 0,
          ease: "none",
        }
      );
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
        <p className="font-mono text-[0.65rem] md:text-label text-terracotta">EDUCATION</p>
      </div>

      <div
        ref={timelineRef}
        className="flex items-start pt-24 md:pt-48 px-4 md:px-6 pl-12 gap-4 md:gap-48 overflow-x-auto md:overflow-hidden snap-x snap-mandatory md:snap-none pb-12 md:pb-0 h-full md:w-fit"
      // Remove fixed width style to allow natural flow
      >
        {educationData.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-[75vw] md:w-[550px] snap-center">
            {/* Added min-h-[300px] to ensure the line is tall enough even for short content */}
            <div className={`relative pl-8 h-full min-h-[180px] md:min-h-[300px] flex flex-col justify-center ${index !== 0 ? 'border-l border-sandy/60' : 'border-l border-transparent'}`}>
              {/* Year */}
              <p className="text-xl md:text-hero font-header font-bold text-terracotta/30 mb-6">
                {item.year}
              </p>

              {/* Primary (Marks/CGPA - Major) */}
              <h3 className="text-lg md:text-h3 font-header font-bold text-parchment mb-3">
                {item.primary}
              </h3>

              {/* Secondary (Degree - Institution) */}
              <p className="text-sm md:text-body-lg text-taupe leading-relaxed">
                {item.secondary}
              </p>
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
