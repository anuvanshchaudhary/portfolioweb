'use client';

import React from 'react';
import { X, Minus, Square } from 'lucide-react';

interface TitleBarProps {
    title: string;
    onClose: () => void;
    onMinimize?: () => void;
    onMaximize?: () => void;
    accentColor?: string;
}

export default function TitleBar({
    title,
    onClose,
    onMinimize,
    onMaximize,
    accentColor = '#007AFF'
}: TitleBarProps) {
    return (
        <div
            className="h-10 bg-strict-black flex items-center justify-between px-4 cursor-grab active:cursor-grabbing"
            style={{ borderBottom: `2px solid ${accentColor}` }}
        >
            {/* Title */}
            <div className="flex items-center gap-2">
                <span className="text-label font-bold uppercase text-window-white tracking-wider">
                    {title}
                </span>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center gap-2">
                {onMinimize && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onMinimize();
                        }}
                        className="w-6 h-6 bg-window-white border-2 border-strict-black flex items-center justify-center hover:bg-warning-orange transition-colors cursor-pointer"
                        aria-label="Minimize window"
                    >
                        <Minus size={14} />
                    </button>
                )}

                {onMaximize && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onMaximize();
                        }}
                        className="w-6 h-6 bg-window-white border-2 border-strict-black flex items-center justify-center hover:bg-success-green transition-colors cursor-pointer"
                        aria-label="Maximize window"
                    >
                        <Square size={14} />
                    </button>
                )}

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                    className="w-6 h-6 bg-window-white border-2 border-strict-black flex items-center justify-center hover:bg-patent-red transition-colors cursor-pointer"
                    aria-label="Close window"
                >
                    <X size={14} />
                </button>
            </div>
        </div>
    );
}
