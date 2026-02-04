"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ProgressTracker() {
  const { scrollYProgress } = useScroll();

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed right-6 top-20 bottom-20 w-1 bg-surface z-50 hidden md:block">
      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="w-full h-full bg-terracotta origin-top"
      />
    </div>
  );
}
