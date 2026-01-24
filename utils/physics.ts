// Spring Physics Configurations for Framer Motion

export const springConfigs = {
    // Default spring for most interactions
    default: {
        type: "spring" as const,
        stiffness: 400,
        damping: 25,
        mass: 1,
    },

    // Bouncy spring for playful interactions
    bouncy: {
        type: "spring" as const,
        stiffness: 300,
        damping: 15,
        mass: 1,
    },

    // Smooth spring for subtle movements
    smooth: {
        type: "spring" as const,
        stiffness: 500,
        damping: 30,
        mass: 1,
    },

    // Stiff spring for quick responses
    stiff: {
        type: "spring" as const,
        stiffness: 600,
        damping: 20,
        mass: 1,
    },

    // Slow spring for dramatic effects
    slow: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
        mass: 1,
    },
} as const;

// Physics Utility Functions

/**
 * Calculate distance between two points
 */
export function calculateDistance(
    x1: number,
    y1: number,
    x2: number,
    y2: number
): number {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

/**
 * Calculate angle between two points in radians
 */
export function calculateAngle(
    x1: number,
    y1: number,
    x2: number,
    y2: number
): number {
    return Math.atan2(y2 - y1, x2 - x1);
}

/**
 * Linear interpolation
 */
export function lerp(start: number, end: number, factor: number): number {
    return start + (end - start) * factor;
}

/**
 * Clamp value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

/**
 * Calculate magnetic force based on distance
 * Returns 0-1 value representing force strength
 */
export function calculateMagneticForce(
    distance: number,
    maxDistance: number = 100
): number {
    if (distance >= maxDistance) return 0;
    return Math.max(0, (maxDistance - distance) / maxDistance);
}

/**
 * Apply magnetic offset to element position
 */
export function applyMagneticOffset(
    elementX: number,
    elementY: number,
    cursorX: number,
    cursorY: number,
    maxDistance: number = 100,
    maxOffset: number = 30
): { x: number; y: number } {
    const distance = calculateDistance(elementX, elementY, cursorX, cursorY);
    const force = calculateMagneticForce(distance, maxDistance);

    if (force === 0) {
        return { x: 0, y: 0 };
    }

    const angle = calculateAngle(elementX, elementY, cursorX, cursorY);

    return {
        x: Math.cos(angle) * force * maxOffset,
        y: Math.sin(angle) * force * maxOffset,
    };
}

/**
 * Detect shake motion based on velocity
 */
export function detectShake(
    velocityX: number,
    velocityY: number,
    threshold: number = 1000
): boolean {
    const totalVelocity = Math.sqrt(
        Math.pow(velocityX, 2) + Math.pow(velocityY, 2)
    );
    return totalVelocity > threshold;
}
