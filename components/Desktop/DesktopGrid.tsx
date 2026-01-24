'use client';

import React from 'react';

export default function DesktopGrid() {
    return (
        <div className="fixed inset-0 blueprint-grid grain-texture">
            {/* Morse Pulse Indicator */}
            <div className="absolute top-10 right-10">
                <div className="w-3 h-3 bg-patent-red rounded-full animate-pulse-slow" />
            </div>
        </div>
    );
}
