'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { buttonVariants } from '@/utils/animations';

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'ghost';
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export default function Button({
    children,
    variant = 'primary',
    isLoading,
    leftIcon,
    rightIcon,
    className = '',
    disabled,
    ...props
}: ButtonProps) {
    const baseStyles = "relative flex items-center justify-center gap-2 px-5 py-2.5 md:px-6 md:py-3 font-bold uppercase tracking-wider text-xs md:text-label transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-strict-black text-window-white border-2 border-strict-black hover:bg-gpt-blue hover:border-gpt-blue hover:text-window-white",
        secondary: "bg-window-white text-strict-black border-2 border-strict-black hover:bg-blueprint-gray",
        ghost: "bg-transparent text-strict-black hover:bg-strict-black/5",
    };

    return (
        <motion.button
            variants={buttonVariants}
            initial="idle"
            whileHover={!disabled && !isLoading ? "hover" : undefined}
            whileTap={!disabled && !isLoading ? "tap" : undefined}
            disabled={disabled || isLoading}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {isLoading ? (
                <Loader2 className="animate-spin w-4 h-4" />
            ) : (
                <>
                    {leftIcon}
                    {children}
                    {rightIcon}
                </>
            )}
        </motion.button>
    );
}
