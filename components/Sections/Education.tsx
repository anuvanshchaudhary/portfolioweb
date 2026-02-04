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

    // Calculate how far we need to scroll horizontally
    const scrollWidth = timeline.scrollWidth - container.offsetWidth;

    // Create horizontal scroll animation
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-surface"
    >
      <div className="absolute top-12 left-6">
        <p className="font-mono text-label text-terracotta">EDUCATION</p>
      </div>

      <div
        ref={timelineRef}
        className="flex items-start pt-32 md:pt-48 h-full px-6 gap-24"
        style={{ width: "fit-content" }}
      >
        {educationData.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-96">
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
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-12 left-6">
        <p className="font-mono text-label text-taupe">SCROLL TO PAN →</p>
      </div>
    </section>
  );
}
