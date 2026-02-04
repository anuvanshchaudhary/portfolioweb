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
                'hero': ['clamp(70px, 13vw, 165px)', { lineHeight: '0.96', letterSpacing: '-0.02em' }], // Increased slightly
                'hero-sm': ['32px', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
                'h1': ['clamp(55px, 10vw, 110px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // Increased slightly
                'h1-sm': ['28px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'h2': ['clamp(45px, 8vw, 85px)', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // Increased slightly
                'h2-sm': ['24px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
                'h3': ['clamp(35px, 6vw, 65px)', { lineHeight: '1.3' }], // Increased slightly
                'h3-sm': ['20px', { lineHeight: '1.3' }],
                'body-lg': ['clamp(24px, 4vw, 34px)', { lineHeight: '1.8' }], // Increased slightly
                'body-lg-sm': ['16px', { lineHeight: '1.8' }],
                'body': ['24px', { lineHeight: '1.6' }], // Increased slightly
                'body-sm': ['14px', { lineHeight: '1.6' }],
                'label': ['17px', { lineHeight: '1.2', letterSpacing: '0.3em' }], // Increased slightly
                'label-sm': ['12px', { lineHeight: '1.2', letterSpacing: '0.3em' }],
            },
            spacing: {
                'section': 'clamp(100px, 16vw, 220px)',
                'section-sm': '40px',
                'paragraph': 'clamp(36px, 6vw, 75px)',
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
