import { create } from 'zustand';
import { WINDOW_TYPES, Z_INDEX } from '@/utils/constants';

export interface WindowState {
    id: string;
    type: string;
    position: { x: number; y: number };
    size: { width: number; height: number };
    zIndex: number;
    isMinimized: boolean;
}

interface WindowStore {
    windows: WindowState[];
    activeWindowId: string | null;
    highestZIndex: number;

    // Actions
    openWindow: (type: string) => void;
    closeWindow: (id: string) => void;
    focusWindow: (id: string) => void;
    updateWindowPosition: (id: string, position: { x: number; y: number }) => void;
    minimizeWindow: (id: string) => void;
    isWindowOpen: (type: string) => boolean;
}

export const useWindowStore = create<WindowStore>((set, get) => ({
    windows: [],
    activeWindowId: null,
    highestZIndex: Z_INDEX.window,

    openWindow: (type: string) => {
        const { windows, highestZIndex, isWindowOpen } = get();

        // Don't open if already open
        if (isWindowOpen(type)) {
            // Instead, focus the existing window
            const existingWindow = windows.find(w => w.type === type);
            if (existingWindow) {
                get().focusWindow(existingWindow.id);
            }
            return;
        }

        // Calculate initial position (cascade windows)
        const offset = windows.length * 40;
        const newZIndex = highestZIndex + 1;

        const newWindow: WindowState = {
            id: `${type}-${Date.now()}`,
            type,
            position: { x: 200 + offset, y: 100 + offset },
            size: { width: 600, height: 500 },
            zIndex: newZIndex,
            isMinimized: false,
        };

        set({
            windows: [...windows, newWindow],
            activeWindowId: newWindow.id,
            highestZIndex: newZIndex,
        });
    },

    closeWindow: (id: string) => {
        set(state => ({
            windows: state.windows.filter(w => w.id !== id),
            activeWindowId: state.activeWindowId === id ? null : state.activeWindowId,
        }));
    },

    focusWindow: (id: string) => {
        const { windows, highestZIndex } = get();
        const newZIndex = highestZIndex + 1;

        set({
            windows: windows.map(w =>
                w.id === id ? { ...w, zIndex: newZIndex } : w
            ),
            activeWindowId: id,
            highestZIndex: newZIndex,
        });
    },

    updateWindowPosition: (id: string, position: { x: number; y: number }) => {
        set(state => ({
            windows: state.windows.map(w =>
                w.id === id ? { ...w, position } : w
            ),
        }));
    },

    minimizeWindow: (id: string) => {
        set(state => ({
            windows: state.windows.map(w =>
                w.id === id ? { ...w, isMinimized: !w.isMinimized } : w
            ),
        }));
    },

    isWindowOpen: (type: string) => {
        return get().windows.some(w => w.type === type);
    },
}));
