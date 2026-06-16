// Design System Constants

// Color Palette
export const COLORS = {
    // Foundation
    blueprintGray: '#EBEBEB',
    windowWhite: '#FFFFFF',
    strictBlack: '#000000',
    textPrimary: '#000000',
    textSecondary: '#666666',
    textTertiary: '#999999',

    // Accents
    patentRed: '#FF3B30',
    gptBlue: '#007AFF',
    velloreBlue: '#003366',
    matrixGreen: '#00FF41',
    successGreen: '#34C759',
    warningOrange: '#FF9500',
} as const;

// Typography Scale
export const TYPOGRAPHY = {
    hero: { size: '96px', lineHeight: '1.0' },
    h1: { size: '48px', lineHeight: '1.1' },
    h2: { size: '32px', lineHeight: '1.2' },
    h3: { size: '24px', lineHeight: '1.3' },
    bodyLg: { size: '18px', lineHeight: '1.6' },
    body: { size: '16px', lineHeight: '1.5' },
    bodySm: { size: '14px', lineHeight: '1.4' },
    label: { size: '12px', lineHeight: '1.2' },
    caption: { size: '11px', lineHeight: '1.3' },
} as const;

// Spacing
export const SPACING = {
    desktopIconGap: 24,
    desktopIconOffset: 40,
    windowBorder: 4,
    windowTitleBarHeight: 40,
    windowMinWidth: 400,
    windowMinHeight: 300,
    windowMaxWidth: '80vw',
    windowMaxHeight: '80vh',
} as const;

// Animation Durations (ms)
export const DURATIONS = {
    windowOpen: 300,
    windowClose: 250,
    hover: 150,
    click: 100,
    zIndexShift: 200,
    drawerSlide: 500,
    gravityFall: 500,
} as const;

// Z-Index Layers
export const Z_INDEX = {
    desktop: 0,
    window: 10,
    activeWindow: 100,
    drawer: 1000,
    modal: 2000,
} as const;

// Window Types
export const WINDOW_TYPES = {
    ABOUT: 'about',
    EDUCATION: 'education',
    PROJECTS: 'projects',
    SKILLS: 'skills',
} as const;

// Project Data
export const PROJECTS = [
    {
        id: 'easy-pdf',
        title: 'Easy PDF',
        description: 'AI-powered PDF summarization web app using GPT-4 and LangChain. Built a full-stack system featuring intelligent text extraction, secure Clerk authentication, a serverless PostgreSQL database, drag-and-drop file uploads up to 16MB, and real-time reading progress tracking.',
        icon: '📄',
        accentColor: COLORS.gptBlue,
        techStack: ['Next.js', 'React', 'TypeScript', 'GPT-4', 'LangChain', 'PostgreSQL', 'Clerk'],
        github: 'https://github.com/anuvanshchaudhary/EasyPDF',
        demo: 'https://easy-pdf-wheat.vercel.app/',
    },
    {
        id: 'morse-assist',
        title: 'Morse Assist',
        description: 'Patent-pending eye-twitch based assistive communication device for individuals with severe motor impairments. Developed an eye-twitch input mechanism encoding eye movements as Morse signals to translate into text with 90%+ accuracy, engineering real-time signal processing on ESP32 to reliably distinguish intentional blinks.',
        icon: '🔴',
        accentColor: COLORS.patentRed,
        techStack: ['ESP32', 'IR Sensors', 'Arduino', 'Embedded C'],
        patentPending: true,
        github: null, // Patent pending, no public repo
    },
    {
        id: 'github-finder',
        title: 'GitHub Finder',
        description: 'Real-time GitHub profile explorer with error handling and responsive design. Fetches user data via GitHub API. Built to learn API integration fundamentals.',
        icon: '🔍',
        accentColor: COLORS.gptBlue,
        techStack: ['HTML', 'CSS', 'JavaScript', 'GitHub API'],
        github: 'https://github.com/anuvanshchaudhary/Github-finder',
        demo: 'https://github-finder-ashen-theta.vercel.app/',
    },
    {
        id: 'stylecraft',
        title: 'StyleCraft',
        description: 'Interactive CSS learning and prototyping platform featuring 6 interactive labs (Flexbox, Typography, Box Model, Backgrounds, Transforms, Borders) with real-time visual feedback. Architected Zustand state stores for reactive, isolated control over 40+ CSS properties simultaneously, with Clerk authentication and Radix UI.',
        icon: '🎨',
        accentColor: COLORS.gptBlue,
        techStack: ['React 19', 'TypeScript', 'Vite', 'Zustand', 'Radix UI', 'Tailwind CSS v4', 'Clerk'],
        github: 'https://github.com/anuvanshchaudhary/Stylecraft',
        demo: 'https://stylecraft-web.vercel.app/',
    },
] as const;

// Skills Data
export const SKILLS = {
    LANGUAGES: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C / C++'],
    FRONTEND: ['React 19', 'Next.js', 'Vite', 'HTML', 'CSS', 'Tailwind CSS v4', 'Zustand'],
    BACKEND_DB: ['Node.js', 'SQL', 'MySQL', 'PostgreSQL', 'REST APIs'],
    AI_ML: ['LangChain', 'OpenAI GPT-4 API', 'Google Gemini API', 'Prompt Engineering'],
    EMBEDDED_IOT: ['ESP32', 'Arduino', 'IR Sensors', 'Embedded C'],
    TOOLS_PLATFORMS: ['Git', 'GitHub', 'Vercel', 'Clerk'],
} as const;

// Contact Information
export const CONTACT = {
    email: 'anuvanshchaudhary8755@gmail.com',
    linkedin: 'https://www.linkedin.com/in/anuvansh-chaudhary9/',
    github: 'https://github.com/anuvanshchaudhary',
    resume: '/resume.pdf',
} as const;

// Education Data
export const EDUCATION = {
    university: 'VIT Vellore',
    degree: 'B.Tech Computer Science and Internet of Things',
    expectedGraduation: '2028',
    cgpa: '8.82',
    highSchool: {
        name: 'DAV Public School, Kotdwara',
        year: '2023',
        percentage: '92%',
    },
} as const;

// Experience Data
export const EXPERIENCE = [
    {
        company: 'Hindware Ltd.',
        location: 'Gurgaon, Haryana',
        role: 'Intern',
        period: 'May – June 2026',
        bullets: [
            'Gained hands-on exposure to enterprise software workflows and internal tooling in a corporate environment.',
            'Collaborated with the development team on web-based projects and modern frameworks.',
        ],
    },
] as const;
