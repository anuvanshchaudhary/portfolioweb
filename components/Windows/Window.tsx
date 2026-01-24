'use client';

import React, { useRef } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { windowVariants } from '@/utils/animations';
import { useWindowStore } from '@/stores/windowStore';
import { useShakeDetection } from '@/hooks/useShakeDetection';
import TitleBar from './TitleBar';
import { SPACING } from '@/utils/constants';

interface WindowProps {
    id: string;
    type: string;
    title: string;
    children: React.ReactNode;
    accentColor?: string;
}

export const WindowContext = React.createContext<{ isGravityActive: boolean }>({ isGravityActive: false });

export default function Window({ id, type, title, children, accentColor = '#007AFF' }: WindowProps) {
    const { windows, focusWindow, updateWindowPosition, closeWindow } = useWindowStore();
    const windowState = windows.find(w => w.id === id);
    const constraintsRef = useRef(null);
    const [isGravityActive, setIsGravityActive] = React.useState(false);

    const { updatePosition } = useShakeDetection({
        onShake: () => setIsGravityActive(true)
    });

    if (!windowState) return null;

    const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        updatePosition(info.point.x, info.point.y);
    };

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        updateWindowPosition(id, {
            x: windowState.position.x + info.offset.x,
            y: windowState.position.y + info.offset.y,
        });

        // Reset gravity after a delay
        if (isGravityActive) {
            setTimeout(() => setIsGravityActive(false), 2000);
        }
    };

    const handleFocus = () => {
        focusWindow(id);
    };

    const handleClose = () => {
        closeWindow(id);
    };

    if (windowState.isMinimized) {
        return null;
    }

    return (
        <WindowContext.Provider value={{ isGravityActive }}>
            {/* Drag constraints container */}
            <div ref={constraintsRef} className="fixed inset-0 pointer-events-none" />

            <motion.div
                variants={windowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                drag
                dragMomentum={false}
                dragElastic={0}
                dragConstraints={constraintsRef}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
                onClick={handleFocus}
                className="fixed bg-window-white border-4 border-strict-black shadow-brutalist cursor-move gpu-accelerated"
                style={{
                    left: windowState.position.x,
                    top: windowState.position.y,
                    width: windowState.size.width,
                    minWidth: SPACING.windowMinWidth,
                    minHeight: SPACING.windowMinHeight,
                    maxWidth: SPACING.windowMaxWidth,
                    maxHeight: SPACING.windowMaxHeight,
                    zIndex: windowState.zIndex,
                }}
            >
                {/* Title Bar */}
                <TitleBar
                    title={title}
                    onClose={handleClose}
                    accentColor={accentColor}
                />

                {/* Content */}
                <div className="p-6 overflow-y-auto" style={{ height: `calc(${windowState.size.height}px - ${SPACING.windowTitleBarHeight}px)` }}>
                    {children}
                </div>
            </motion.div>
        </WindowContext.Provider>
    );
}
