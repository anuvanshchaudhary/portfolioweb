"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  // Force rebuild
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 px-4 md:px-6 py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">


        {/* Availability Badge */}
        <motion.div
          className="px-6 py-2 bg-surface/80 backdrop-blur-sm border border-parchment/20"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className="font-mono text-label-sm md:text-label text-terracotta">AVAIL. 2026</p>
        </motion.div>
      </div>
    </motion.header>
  );
}
