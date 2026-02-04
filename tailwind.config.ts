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
                'hero': ['clamp(70px, 9vw, 130px)', { lineHeight: '0.96', letterSpacing: '-0.02em' }], // Reduced scaling
                'hero-sm': ['32px', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
                'h1': ['clamp(55px, 7vw, 90px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // Reduced scaling
                'h1-sm': ['28px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'h2': ['clamp(45px, 6vw, 70px)', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // Reduced scaling
                'h2-sm': ['24px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
                'h3': ['clamp(35px, 4vw, 50px)', { lineHeight: '1.3' }], // Reduced scaling
                'h3-sm': ['20px', { lineHeight: '1.3' }],
                'body-lg': ['clamp(20px, 2vw, 24px)', { lineHeight: '1.8' }], // Reduced scaling
                'body-lg-sm': ['16px', { lineHeight: '1.8' }],
                'body': ['24px', { lineHeight: '1.6' }], // Increased slightly
                'body-sm': ['14px', { lineHeight: '1.6' }],
                'label': ['17px', { lineHeight: '1.2', letterSpacing: '0.3em' }], // Increased slightly
                'label-sm': ['12px', { lineHeight: '1.2', letterSpacing: '0.3em' }],
            },
            spacing: {
                'section': 'clamp(100px, 10vw, 160px)',
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
