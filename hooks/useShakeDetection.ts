import { useState, useRef, useEffect } from 'react';

interface ShakeDetectorOptions {
    threshold?: number; // Velocity threshold
    timeout?: number;   // Time window for shake detection
    onShake?: () => void;
}

export function useShakeDetection({
    threshold = 15,
    timeout = 1000,
    onShake
}: ShakeDetectorOptions = {}) {
    const [velocity, setVelocity] = useState({ x: 0, y: 0 });
    const lastPosition = useRef({ x: 0, y: 0 });
    const lastTime = useRef(Date.now());
    const shakeCount = useRef(0);
    const lastShakeTime = useRef(Date.now());

    const updatePosition = (x: number, y: number) => {
        const now = Date.now();
        const dt = now - lastTime.current;

        if (dt > 0) {
            const dx = x - lastPosition.current.x;
            const dy = y - lastPosition.current.y;

            // Calculate velocity in pixels/ms, then scale up for easier numbers
            const vx = dx / dt;
            const vy = dy / dt;

            setVelocity({ x: vx, y: vy });

            // Check for shake
            // A shake is a rapid change in direction with high velocity
            const speed = Math.sqrt(vx * vx + vy * vy);

            if (speed * 10 > threshold) { // Scale up speed for comparison
                if (now - lastShakeTime.current < timeout) {
                    shakeCount.current += 1;
                } else {
                    shakeCount.current = 1;
                }

                lastShakeTime.current = now;

                if (shakeCount.current > 3) { // 3 rapid movements
                    onShake?.();
                    shakeCount.current = 0; // Reset
                }
            }

            lastPosition.current = { x, y };
            lastTime.current = now;
        }
    };

    return { updatePosition, velocity };
}
