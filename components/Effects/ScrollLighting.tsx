'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollLightingProps {
    children: React.ReactNode;
    className?: string;
}

export default function ScrollLighting({ children, className = '' }: ScrollLightingProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 80%", "end 20%"]
    });

    // Transform scroll progress to opacity
    // When element is in center 40% of viewport, opacity = 1.0
    // Otherwise, opacity = 0.1
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.3, 0.5, 0.7, 1],
        [0.1, 0.5, 1.0, 0.5, 0.1]
    );

    return (
        <motion.div
            ref={ref}
            style={{ opacity }}
            className={`smooth-opacity ${className}`}
        >
            {children}
        </motion.div>
    );
}
