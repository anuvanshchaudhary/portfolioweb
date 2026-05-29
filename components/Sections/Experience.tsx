"use client";

import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCE } from "@/utils/constants";
import ScrollScrambleText from "../Effects/ScrollScrambleText";

export default function Experience() {
  return (
    <section id="experience" className="py-section-sm md:py-section px-4 md:px-6 bg-void relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <p className="font-mono text-label-sm md:text-label text-terracotta mb-12">
          EXPERIENCE
        </p>

        {/* Experience Content */}
        <div className="space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 border-t border-parchment/10 pt-12 first:border-t-0 first:pt-0"
            >
              {/* Left Column: Metadata */}
              <div className="space-y-4">
                <div className="text-xl md:text-5xl font-header font-bold text-terracotta/30 leading-none">
                  {exp.period}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-header font-bold text-parchment">
                    <ScrollScrambleText text={exp.company} />
                  </h3>
                  <p className="font-mono text-sm md:text-base text-taupe mt-1 tracking-wider">
                    {exp.role} • {exp.location}
                  </p>
                </div>
              </div>

              {/* Right Column: Bullets */}
              <div className="space-y-6">
                <ul className="space-y-4">
                  {exp.bullets.map((bullet, bIndex) => (
                    <motion.li
                      key={bIndex}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: bIndex * 0.2 + 0.3 }}
                      className="flex items-start gap-4 text-sm md:text-body-lg text-parchment/80 leading-relaxed hover:text-parchment transition-colors"
                    >
                      <span className="text-terracotta mt-2.5 flex-shrink-0 w-2 h-2 bg-terracotta rounded-full" />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative corner lines/background lines (editorial brutalist look) */}
      <div className="absolute top-0 right-0 w-48 h-48 border-t border-r border-parchment/5 -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 border-b border-l border-parchment/5 -z-10 pointer-events-none" />
    </section>
  );
}
