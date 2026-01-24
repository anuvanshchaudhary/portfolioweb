import { Variants } from 'framer-motion';
import { springConfigs } from './physics';

// Window Animations
export const windowVariants: Variants = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            ...springConfigs.default,
            duration: 0.3,
        },
    },
    exit: {
        scale: 0,
        opacity: 0,
        transition: {
            ...springConfigs.smooth,
            duration: 0.25,
        },
    },
};

// Desktop Icon Animations
export const iconVariants: Variants = {
    idle: {
        scale: 1,
        y: 0,
    },
    hover: {
        scale: 1.1,
        y: -4,
        transition: springConfigs.stiff,
    },
    tap: {
        scale: 0.95,
        transition: {
            duration: 0.1,
        },
    },
};

// Button Animations
export const buttonVariants: Variants = {
    idle: {
        scale: 1,
    },
    hover: {
        scale: 1.05,
        transition: springConfigs.stiff,
    },
    tap: {
        scale: 0.95,
        transition: {
            duration: 0.1,
        },
    },
};

// Drawer Animations
export const drawerVariants: Variants = {
    hidden: {
        y: '100%',
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            ...springConfigs.default,
            duration: 0.5,
        },
    },
};

// Fade In Animations
export const fadeInVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
};

// Stagger Children Animation
export const staggerContainerVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export const staggerItemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: springConfigs.smooth,
    },
};

// Coin Flip Animation
export const coinFlipVariants: Variants = {
    front: {
        rotateY: 0,
        transition: springConfigs.default,
    },
    back: {
        rotateY: 180,
        transition: springConfigs.default,
    },
};

// Gravity Fall Animation
export const gravityFallVariants: Variants = {
    initial: {
        y: 0,
        rotate: 0,
    },
    fall: {
        y: '100%',
        rotate: Math.random() * 20 - 10, // Random rotation between -10 and 10
        transition: {
            duration: 0.5,
            ease: [0.5, 1, 0.89, 1], // Cubic bezier for natural fall
        },
    },
};

// Scanning Laser Animation
export const scanningLaserVariants: Variants = {
    animate: {
        y: ['0%', '100%', '0%'],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
        },
    },
};

// Morse Pulse Animation
export const morsePulseVariants: Variants = {
    animate: {
        opacity: [1, 0.3, 1],
        scale: [1, 0.9, 1],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};
