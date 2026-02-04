"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const sections = [
  { id: "hero", label: "INTRO" },
  { id: "about", label: "ABOUT" },
  // { id: 'experience', label: 'EXPERIENCE' },
  { id: "education", label: "EDUCATION" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

export default function SectionIndicator() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const currentSection = sections.find(
    (section) => section.id === activeSection,
  );

  return (
    <motion.div
      className="fixed bottom-8 left-[47.75%] -translate-x-1/2 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <AnimatePresence mode="wait">
        <motion.button
          key={activeSection}
          className="group relative flex items-center gap-3 px-6 py-3 bg-strict-black/80 backdrop-blur-md border border-parchment/20 rounded-full shadow-2xl hover:bg-strict-black/90 transition-all duration-300"
          style={{ transform: "translateX(10px)" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const nextIndex = sections.findIndex((s) => s.id === activeSection);
            const next = sections[(nextIndex + 1) % sections.length];
            document
              .getElementById(next.id)
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {/* Animated background glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-terracotta/20 to-gpt-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            layoutId="glow"
          />

          {/* Section label */}
          <motion.span
            className="relative font-mono text-label text-parchment tracking-wider"
            layoutId="label"
          >
            {currentSection?.label}
          </motion.span>

          {/* Arrow icon */}
          <motion.div
            className="relative"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-4 h-4 text-terracotta" />
          </motion.div>

          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-terracotta/40 rounded-tl-full" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-terracotta/40 rounded-tr-full" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-terracotta/40 rounded-bl-full" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-terracotta/40 rounded-br-full" />
        </motion.button>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              section.id === activeSection
                ? "bg-terracotta w-4"
                : "bg-parchment/30"
            }`}
            layoutId={`dot-${section.id}`}
          />
        ))}
      </div>
    </motion.div>
  );
}
