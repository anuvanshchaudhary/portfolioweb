import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Warm Editorial Palette
                'void': '#1a0f0e',
                'surface': '#2e1f1c',
                'parchment': '#F4F0EC',
                'taupe': '#9F8170',
                'terracotta': '#A45A52',
                'palm': '#8A9A5B',
                'sandy': '#E0AB76',
                'clay': '#79443B',
            },
            fontFamily: {
                header: ['Playfair Display', 'serif'],
                sans: ['var(--font-inter)', 'Inter', '-apple-system', 'sans-serif'],
                mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
            },
            fontSize: {
                'hero': ['clamp(48px, 8vw, 96px)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
                'h1': ['clamp(36px, 6vw, 64px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'h2': ['clamp(28px, 4vw, 48px)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
                'h3': ['clamp(24px, 3vw, 36px)', { lineHeight: '1.3' }],
                'body-lg': ['clamp(18px, 2vw, 22px)', { lineHeight: '1.8' }],
                'body': ['16px', { lineHeight: '1.6' }],
                'label': ['12px', { lineHeight: '1.2', letterSpacing: '0.3em' }],
            },
            spacing: {
                'section': 'clamp(80px, 12vw, 160px)',
                'paragraph': 'clamp(32px, 5vw, 64px)',
            },
            borderRadius: {
                'none': '0',
            },
            animation: {
                'rotate-slow': 'rotate 20s linear infinite',
            },
        },
    },
    plugins: [],
};

export default config;
