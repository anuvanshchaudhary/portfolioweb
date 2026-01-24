Product Requirements Document (PRD)
Anuvansh Chaudhary - Personal Portfolio Website

1. Executive Summary
1.1 Vision Statement
Create an exotic, physics-based portfolio experience inspired by Jonas Reymondin's interactive design philosophy, positioning Anuvansh Chaudhary as a creative, technically skilled full-stack developer ready for top-tier internships and full-time opportunities.
1.2 Product Goals

Primary: Secure internship/job opportunities at top tech companies
Secondary: Establish personal brand as an innovative developer
Tertiary: Create a memorable, shareable experience that friends/classmates will revisit

1.3 Success Metrics

Time on site > 2 minutes (industry avg: 54 seconds)
60%+ scroll depth through all project sections
25%+ click-through rate on "Contact" or "Resume Download"
Social share rate > 15% among first 100 visitors


2. User Personas
Persona 1: "The Recruiter" - Sarah, 32
Context: Reviews 50+ portfolios daily for Fortune 500 tech companies
Needs:

Quick skill assessment (< 30 seconds)
Evidence of technical depth (projects, code quality)
Cultural fit indicators (personality, creativity)

Pain Points:

Generic, templated portfolios
Slow-loading sites
Unclear contact information

How We Serve Her:

Instant "Skills Terminal" with live tech stack
Project cards with clear tech tags and impact metrics
Always-visible "Connect" drawer with LinkedIn/Email


Persona 2: "The Peer Developer" - Rohan, 21
Context: VIT classmate exploring what's possible in web development
Needs:

Inspiration for own portfolio
Learning from implementation techniques
Networking with talented peers

Pain Points:

Boring, corporate-feeling student portfolios
No clear differentiation between candidates

How We Serve Him:

Cutting-edge animations (spring physics, magnetic interactions)
Open-source code snippets (GitHub links on projects)
"Easter eggs" (Morse Mode, Shaker Effect) that reward exploration


Persona 3: "The Technical Interviewer" - Priya, 28
Context: Senior developer evaluating technical depth for startup roles
Needs:

Evidence of problem-solving ability
Understanding of system design (hardware + software)
Depth in specific domains (AI, hardware, full-stack)

Pain Points:

Surface-level project descriptions
No link to live demos or GitHub

How We Serve Her:

Deep-dive project windows with architecture diagrams
"Patent Pending" badge for hardware project (credibility signal)
Live GPT-4 status indicator on Easy PDF (shows real implementation)


3. Design Philosophy & Visual Strategy
3.1 Core Design Principles
Inspired by: Jonas Reymondin (jonasreymondin.com/about)

Tactile Physics

Every element has weight, momentum, and collision behavior
Spring animations (stiffness: 400, damping: 25)
No linear transitions—everything "bleeds out" naturally


Spatial Storytelling

Z-axis depth creates hierarchy
Focused elements blur background (depth-of-field)
Windows "bloom" into view with staggered timing


Brutalist Aesthetics

High contrast (black borders, white backgrounds)
Sharp corners, heavy drop shadows
Functional over decorative (but still playful)


Micro-Interaction Density

Every hover, click, drag triggers feedback
Cursor-reactive elements (magnetic buttons, distortion effects)
Background "flavor" animations (Morse pulse, code streams)



3.2 Color System
Primary Palette:
- Base Layer: #EBEBEB (Blueprint Gray)
- Borders: #000000 (Strict Black)

Accent Palette:
- Hardware Projects: #FF3B30 (Patent Red)
- AI Projects: #007AFF (GPT Intelligence Blue)
- Education: #003366 (Vellore Blue)
- Terminal/Skills: #00FF41 (Matrix Green)
3.3 Typography
Primary Font: Inter (900 weight for headings)
Secondary Font: JetBrains Mono (for terminal/code)
Scale:

Hero: 96px (Desktop) / 48px (Mobile)
Section Titles: 48px
Body: 16px
Labels: 12px (uppercase, tracked +0.1em)


4. Information Architecture
4.1 Site Structure
Anuvansh.OS
│
├── Desktop (Initial View)
│   ├── About.exe (Icon)
│   ├── Education.txt (Icon)
│   ├── Projects.dir (Icon)
│   └── Skills.terminal (Icon)
│
├── Floating Windows (Draggable)
│   ├── ROOT/Education/
│   ├── PROJECT/Hardware/Morse_Assist
│   ├── PROJECT/Web/Easy_PDF
│   ├── PROJECT/Web/GitHub_Finder
│   ├── PROJECT/Web/CSS_Lab
│   └── SYSTEM/Skills/
│
└── Connect Drawer (Hidden Footer)
    ├── Gmail: anuvanshchaudhary8755@gmail.com
    ├── LinkedIn: [Profile Link]
    ├── GitHub: [Profile Link]
    └── Resume Download (PDF)
4.2 User Flow Map
Entry Point (Landing)
    ↓
Desktop with 4 Icons
    ↓
User clicks "Projects.dir"
    ↓
Window opens with 4 project cards
    ↓
User hovers "Easy PDF" → Scanning laser animation
    ↓
User clicks → Detailed project view
    ↓
User impressed → Drags window (feels physics)
    ↓
User shakes window → Content falls (gravity effect)
    ↓
User curious → Opens "Skills.terminal"
    ↓
Moves cursor → Skills fly toward cursor (magnetic)
    ↓
User ready to connect → Clicks "CONNECT" button
    ↓
Drawer slides up with giant email/LinkedIn
    ↓
User clicks email → Opens mailto link

5. Feature Specifications
5.1 Core Features (MVP)
Feature 1: Draggable OS Windows
Priority: P0 (Critical)
User Story: As a recruiter, I want to interact with project details in a unique way, so I remember this candidate.
Acceptance Criteria:

 Windows drag smoothly with spring physics
 Clicking brings window to front (with scale animation)
 Windows collision-detect at screen edges (squish effect)
 Windows stack with proper z-index management
 Close/minimize/maximize buttons functional

Technical Requirements:

React state management for window positions
Mouse event handlers (onMouseDown, onMouseMove, onMouseUp)
CSS transforms for positioning and scaling
Framer Motion or React Spring for physics


Feature 2: Project Showcase Windows
Priority: P0 (Critical)
User Story: As a technical interviewer, I want to see detailed technical specs, so I can assess the candidate's depth.
Sub-Feature 2.1: Easy PDF Window
Content:

Title: PROJECT/Web/Easy_PDF
Perpetual scanning laser (vertical movement)
GPT-4 status indicator (pulsing green dot)
Tech stack: Next.js, React, TypeScript, GPT-4, Langchain, Clerk
Upload area mockup (16MB limit label)
Link to live demo (if available) or GitHub

Animations:

Scanning laser loops infinitely
Tech pills are draggable
On shake: Pills fall to bottom with gravity

Acceptance Criteria:

 Laser animation runs at 60fps
 All tech tags visible and correctly labeled
 Window opens within 300ms of click


Sub-Feature 2.2: Hardware/Morse_Assist Window
Content:

Title: PROJECT/Hardware/Morse_Assist
Patent Pending badge (red)
ESP32 + IR Sensor diagram (simplified schematic)
Morse code dots/dashes: · · · − − − · · ·
On hover: Morphs to "90%+ ACCURACY"
Toggle switch for "Morse Mode"

Animations:

Morse code text morphs character-by-character
Morse Mode flips switch with spring bounce
When active: All UI text converts to morse for 2 seconds

Acceptance Criteria:

 Morse code reveal completes in < 500ms
 Toggle switch has satisfying spring physics
 Morse Mode doesn't break layout


Sub-Feature 2.3: GitHub Finder Window
Content:

Title: PROJECT/Web/GitHub_Finder
Search bar (non-functional, demo UI)
Sample GitHub user card
Tech stack: HTML, CSS, JavaScript, GitHub API
Link to live demo/GitHub

Animations:

Search bar glows on hover
User card slides in from right


Sub-Feature 2.4: CSS Lab Window
Content:

Title: PROJECT/Web/CSS_Lab
Interactive lesson modules (2-3 previews)
"Change border-radius" live demo
Tech stack: React, CSS Variables

Animations:

Live CSS changes apply to window itself
Border radius slider affects window corners in real-time


Feature 3: Education Window
Priority: P0 (Critical)
User Story: As a recruiter, I want to verify educational credentials quickly.
Content:

Title: ROOT/Education/
VIT Vellore logo (24px x 24px square with "V")
Degree: B.Tech Computer Science
Expected Graduation: 2028
CGPA: 8.7 (displayed as 3D spinning coin)
Class XII: 92% - DAV Public School, Kotdwara (2023)

Animations:

CGPA coin spins 180° on hover
On shake: All content falls to bottom

Acceptance Criteria:

 CGPA coin maintains 3D perspective
 All text is accessible and readable
 Hover triggers within 100ms


Feature 4: Skills Terminal
Priority: P0 (Critical)
User Story: As a recruiter, I want to see technical skills at a glance.
Content:

Title: SYSTEM/Skills/
Black background, Matrix green text (#00FF41)
Terminal prompt: $ ls -la skills/
Categories:

LANGUAGES: Python, Java, C/C++, JavaScript, TypeScript
FRONTEND: HTML, CSS, React, Next.js, Tailwind CSS
BACKEND: SQL, MySQL, Node.js, Express
TOOLS: Git, GitHub, Vercel



Animations:

Magnetic effect: Skills fly toward cursor (within 100px radius)
Snap back when cursor moves away
Terminal cursor blinks

Acceptance Criteria:

 Magnetic effect calculates distance in real-time
 Performance stays above 60fps with all skills moving
 Skills return to original position smoothly


Feature 5: Connect Drawer
Priority: P0 (Critical)
User Story: As a recruiter, I want to contact the candidate immediately after viewing the portfolio.
Content:

Hidden drawer at bottom of screen
Button: "CONNECT" (always visible, center-bottom)
Drawer height: 200px
Contents (100px font size):

📧 GMAIL icon + "anuvanshchaudhary8755@gmail.com"
💼 LINKEDIN icon + "LinkedIn"
💻 GITHUB icon + "GitHub"
📄 RESUME DOWNLOAD button



Animations:

Drawer slides up with ease-out curve (500ms)
Button morphs to "CLOSE" when drawer open
Links have magnetic pull (shift toward cursor)

Acceptance Criteria:

 Drawer opens/closes smoothly
 All links open in new tab
 Resume downloads as PDF
 Drawer accessible on mobile (tap to open)


5.2 Advanced Features (Post-MVP)
Feature 6: "About.exe" Window
Priority: P1 (High)
Content:

Intro paragraph: "Second Year CS undergraduate focused on web and mobile development..."
Profile photo (circular, 120px)
Personal interests (3-4 items)
Current status: "🔍 Searching for my love in tech"


Feature 7: Trash Bin
Priority: P2 (Medium)
Behavior:

Drag window to trash icon
Window "crunches" up (scale to 0) with crumple animation
"UNDO" button appears for 3 seconds
Clicking undo restores window


Feature 8: Desktop Wallpaper Toggle
Priority: P3 (Low)
Options:

Blueprint Grid (default)
Dark Mode (black background, white grid)
Minimal (solid color)


Feature 9: Konami Code Easter Egg
Priority: P3 (Low)
Trigger: ↑ ↑ ↓ ↓ ← → ← → B A
Result: All windows spin 360° and rearrange in perfect grid

6. Technical Architecture
6.1 Technology Stack
Frontend Framework: Next.js 14 (App Router)
Reasoning: SSR for SEO, fast performance, React ecosystem
Animation Library: Framer Motion
Reasoning: Best-in-class spring physics, gesture support, layout animations
Styling: Tailwind CSS + CSS Modules
Reasoning: Rapid prototyping, brutalist design system compatibility
State Management: Zustand
Reasoning: Lightweight, perfect for window position/z-index tracking
Deployment: Vercel
Reasoning: Seamless Next.js integration, automatic HTTPS, global CDN
Analytics: Vercel Analytics + Posthog
Reasoning: Track scroll depth, interaction rates, session duration

6.2 Component Architecture
src/
├── app/
│   ├── layout.tsx (Global layout, fonts)
│   ├── page.tsx (Desktop view)
│   └── globals.css (Tailwind config)
│
├── components/
│   ├── Desktop/
│   │   ├── DesktopIcon.tsx
│   │   ├── DesktopGrid.tsx
│   │   └── TrashBin.tsx
│   │
│   ├── Windows/
│   │   ├── Window.tsx (Base draggable window)
│   │   ├── TitleBar.tsx
│   │   ├── AboutWindow.tsx
│   │   ├── EducationWindow.tsx
│   │   ├── ProjectsWindow.tsx
│   │   ├── SkillsWindow.tsx
│   │   └── ProjectCard.tsx
│   │
│   ├── Animations/
│   │   ├── ScanningLaser.tsx
│   │   ├── MorseCodeReveal.tsx
│   │   ├── MagneticSkills.tsx
│   │   └── GravityFall.tsx
│   │
│   └── UI/
│       ├── ConnectDrawer.tsx
│       ├── MorseToggle.tsx
│       └── Button.tsx
│
├── hooks/
│   ├── useWindowManager.ts (Z-index, positions)
│   ├── useDragAndDrop.ts (Mouse events)
│   ├── useShakeDetection.ts (Velocity tracking)
│   └── useMagneticEffect.ts (Cursor proximity)
│
├── stores/
│   └── windowStore.ts (Zustand store)
│
└── utils/
    ├── animations.ts (Framer variants)
    ├── physics.ts (Spring configs)
    └── constants.ts (Colors, sizes)

6.3 Performance Requirements
MetricTargetCritical ThresholdFirst Contentful Paint< 1.5s< 2.5sTime to Interactive< 3.0s< 4.0sLighthouse Performance> 90> 75Animation Frame Rate60fps30fpsBundle Size (gzip)< 150KB< 250KB
Optimization Strategies:

Code splitting per window component
Lazy load project images
Use will-change CSS for animated elements
Debounce magnetic effect calculations
Use CSS transforms (GPU-accelerated)


7. Content Strategy
7.1 Copywriting Tone
Voice: Confident but humble, technical but accessible
Adjectives: Innovative, curious, detail-oriented, collaborative
Avoid: Arrogance, jargon without explanation, generic buzzwords
7.2 Project Descriptions
Easy PDF:

"AI-powered PDF summarization tool using GPT-4 and Langchain. Handles 16MB files, secure authentication, and real-time processing. Built for students drowning in research papers."

Morse Assist:

"Patent-pending assistive communication system for individuals with severe motor impairments. Converts eye twitches into Morse code with 90%+ accuracy using ESP32 and IR sensors. Low-cost, non-invasive, life-changing."

GitHub Finder:

"Real-time GitHub profile explorer with error handling and responsive design. Fetches user data via GitHub API. Built to learn API integration fundamentals."

CSS Lab:

"Interactive CSS lesson platform teaching border-radius, transforms, and animations through live code editing. Beginner-friendly, instant feedback."


7.3 SEO Strategy
Primary Keywords:

Anuvansh Chaudhary
Full-stack developer portfolio
VIT Vellore computer science
AI PDF summarization
Assistive technology patent

Meta Tags:
html<title>Anuvansh Chaudhary | Full-Stack Developer & Innovator</title>
<meta name="description" content="Second-year CS student at VIT Vellore. Building AI tools, assistive hardware, and interactive web experiences. Open for internships." />
<meta property="og:image" content="/og-image.png" />
URL Structure:

Primary: anuvanshchaudhary.com
Fallback: anuvansh-portfolio.vercel.app


8. User Testing Plan
8.1 Pre-Launch Testing
Week 1-2: Internal Testing

Developer self-test on 5 devices
Friends/family usability test (n=10)
Collect feedback on:

Confusion points
Friction in interactions
"Wow" moments



Week 3: Peer Review

Share with 5 VIT classmates (CS major)
Share with 2 developer friends (external)
Metrics:

Time to find contact info
Number of windows opened
Recall of project names (24hrs later)



Week 4: Recruiter Simulation

Send to 3 professionals in recruiting/HR
Ask: "Would you interview this candidate?"
Measure: Time on site, scroll depth

8.2 Post-Launch Analytics
Week 1-4: Gather baseline data

Google Analytics + Posthog events
Track:

Window open rate (which projects get most clicks)
Drawer open rate
Resume download rate
Bounce rate by traffic source



Month 2: A/B Testing

Test 1: Morse Mode toggle (on by default vs. off)
Test 2: Connect drawer (always visible vs. hidden)
Test 3: Desktop icon labels (technical names vs. friendly names)


9. Launch Plan
9.1 Phased Rollout
Phase 1: Soft Launch (Week 1)

Deploy to Vercel
Share with close friends (20 people)
Monitor error logs, performance
Fix critical bugs

Phase 2: Public Launch (Week 2)

Post on LinkedIn with demo video
Share on VIT student groups
Post on r/webdev, r/reactjs (if allowed)
Send to 10 target companies with personalized messages

Phase 3: Iteration (Week 3-4)

Implement feedback from Week 1-2
Add missing features (trash bin, about window)
Optimize for mobile

9.2 Distribution Channels

LinkedIn Post:

Video: 30-second screen recording showing interactions
Caption: "Spent 2 weeks building an OS-themed portfolio. Click to drag, shake for gravity, toggle Morse Mode. Link in comments."
Tag: VIT alumni, web dev influencers


GitHub README:

Add to personal GitHub profile README
Link to live site with GIF preview


Email Outreach:

Send to 15 target companies:

Subject: "VIT CS Student - Portfolio Review Request"
Body: 1 paragraph intro + link
Personalize for each company




VIT Career Services:

Submit to placement cell as portfolio example
Request feature in "Student Showcase"




10. Success Criteria & KPIs
10.1 Launch Week Goals (Week 1)

 100 unique visitors
 2+ minutes average session duration
 5+ social shares (LinkedIn/Twitter)
 0 critical bugs reported

10.2 Month 1 Goals

 500 unique visitors
 3 recruiter messages (LinkedIn/Email)
 1 internship interview scheduled
 10+ positive comments/feedback

10.3 Month 3 Goals

 Featured on 1 design showcase site (Awwwards, Behance)
 1000+ unique visitors
 5+ interview opportunities
 1 internship offer

10.4 Long-Term Goals (6 months)

 Lands dream internship at target company
 Portfolio case study published on personal blog
 50+ GitHub stars on open-source repo
 Invited to speak at VIT tech event


11. Risk Management
11.1 Technical Risks
RiskProbabilityImpactMitigationPoor mobile performanceHighHighSimplify animations on mobile, disable physics below 768pxBrowser compatibility issuesMediumMediumTest on Safari, Firefox, Chrome. Provide fallback UIAccessibility violationsMediumHighAdd ARIA labels, keyboard navigation, screen reader supportSlow load timesLowHighCode splitting, lazy loading, optimize images
11.2 User Experience Risks
RiskProbabilityImpactMitigationUsers confused by OS metaphorMediumHighAdd 2-second tutorial on first visitRecruiters don't interact (just skim)HighCriticalEnsure key info visible without dragging windows"Too gimmicky" perceptionMediumMediumBalance playfulness with professionalismMobile users bounceHighHighCreate mobile-first simplified view

12. Open Questions

Should we include a blog section?

Pro: Shows writing ability, SEO benefits
Con: Adds complexity, maintenance burden
Decision: Defer to Phase 2


Real-time chat widget (for recruiters)?

Pro: Immediate engagement
Con: May seem desperate, requires monitoring
Decision: No, focus on email/LinkedIn


Dark mode toggle?

Pro: User preference, trendy
Con: Brutalist design works best in high contrast
Decision: Yes, but as desktop wallpaper option (P2)


Include personal photos?

Pro: Humanizes candidate
Con: Design is already personality-rich
Decision: Yes, in About.exe window


Link to GitHub repos for each project?

Pro: Shows transparency, code quality
Con: Some projects may not be public
Decision: Yes for all except patent-pending hardware project




13. Appendix
13.1 Inspiration Sites

Jonas Reymondin: https://jonasreymondin.com/about
Jerimy Brown: (3D scroll-based portfolio)
Bruno Simon: https://bruno-simon.com/ (3D game portfolio)
Jacek Jeznach: https://jacekjeznach.com/ (physics-based)

13.2 Design Tools

Figma: High-fidelity mockups
Excalidraw: Window layout sketches
Lottie: Export animations for loading states
Spline: 3D ESP32 model (if needed)

13.3 Accessibility Checklist

 Color contrast ratio ≥ 4.5:1
 Keyboard navigation for all windows
 Focus indicators visible
 Alt text for all images
 ARIA labels for icon-only buttons
 Screen reader tested (NVDA, VoiceOver)
 Reduced motion media query support