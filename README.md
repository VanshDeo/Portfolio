# Vansh Deo — Personal Portfolio

An immersive, cinematic personal portfolio for **Vansh Deo**, developer and researcher working at the intersection of **Web3**, **AI/ML**, and **Full-Stack Engineering**.

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Motion (Framer Motion v12), and Lenis smooth scrolling.

---

## 🎨 Art Direction & Design Language

- **Background**: Near-black charcoal (`#101010`)
- **Secondary Surfaces**: Deep graphite (`#181818` / `#161616`)
- **Primary Text**: Warm off-white (`#F0EFEC`)
- **Secondary Text**: Muted slate grey (`#A3A09C`)
- **Accent**: Restrained, muted brick red (`#C65B4D`)
- **Secondary Accent**: Dark rust (`#943E35`)
- **Borders**: Subtle charcoal grey (`#2A2A2A`)
- **Typography**:
  - Display: **Bebas Neue** (high-impact condensed display typeface via Google Fonts)
  - Body: **Manrope** (clean, contemporary geometric sans-serif)

---

## 🖥️ Hero Experience: Scroll-to-Zoom

The hero section features a scroll-responsive zoom animation centered around the attached laptop visual (`/public/assets/hero-laptop.png`):
- **Initial Viewport**: The laptop scene is centered, preserving its original 16:9 composition with seamless dark-vignette edge blending into the `#101010` canvas.
- **Scroll Progression**: Over a dedicated `260vh` scroll distance, the laptop scales up smoothly (from `1.0` to `2.38x` on desktop), expanding outward until the screen artwork fills the screen edge-to-edge.
- **Natural Unpinning**: The sticky stage seamlessly unpins as the zoom completes, continuing smoothly into the editorial narrative sections below.
- **Accessibility**: Honors `prefers-reduced-motion` with an elegant static layout and normal vertical scrolling.

---

## 📐 Architecture & Key Sections

1. **Cinematic Hero**: Pinned scroll-to-zoom laptop hero stage (`src/components/landing/CinematicHero.tsx`).
2. **01 // Narrative & Perspective**: Considered editorial biography covering Vansh's technical interests and core philosophy (`src/components/landing/AboutSection.tsx`).
3. **02 // Tooling & Technologies**: Grouped skill areas without arbitrary percentage bars (`src/components/landing/SkillsSection.tsx`).
4. **03 // Selected Works**: 6 featured data-driven engineering projects with problem statements, approaches, tech tags, and source links (`src/components/landing/ProjectsSection.tsx`).
   - **Swara**: On-device wake-word detection with quantised TensorFlow Lite on Raspberry Pi.
   - **Chorus**: Citation-backed RAG platform with Google Gemini.
   - **SealBid**: Privacy-preserving auction contracts on Midnight Network (Zero-Knowledge).
   - **Secure Relief**: Cryptographically verified crisis distribution platform.
   - **Hornet Detection**: Edge-computing & computer-vision pipeline with hardware deterrents.
   - **Aditya-L1 SWIS Research**: Solar wind ion flux analysis & CME halo event identification.
5. **04 // Applied Research**: Dedicated research tracks for on-device edge AI, Midnight ZK proofs, and space telemetry physics (`src/components/landing/ResearchSection.tsx`).
6. **05 // Technical Journey**: Chronological milestone timeline (`src/components/landing/ExperienceTimeline.tsx`).
7. **06 // Community & Impact**: Hackathons, developer community leadership at KGEC, and open-source contributions (`src/components/landing/AchievementsSection.tsx`).
8. **07 // Connectivity & Inquiries**: Copy-email interaction, transmission form, and verified social channels (`src/components/landing/ContactSection.tsx`).
9. **Cinematic Navigation & Footer**: Active section highlighting, responsive mobile menu, back-to-top button (`src/components/common/CinematicNavbar.tsx`, `CinematicFooter.tsx`).

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm / pnpm / yarn

### Development Server

Run the local development server:

```bash
npm run dev
# or
npx next dev --turbopack
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## ⚙️ Configuration & Customization

All personal information, links, and project data are structured and easily configurable in `src/config/`:

- `src/config/Hero.tsx` — Hero text, tagline, buttons, and social links.
- `src/config/About.tsx` — Narrative biography and architectural focus areas.
- `src/config/Skills.ts` — Categorized technical skill groups.
- `src/config/Projects.tsx` — Featured projects list, problem statements, and live/repo links.
- `src/config/Research.ts` — Dedicated research tracks and findings.
- `src/config/Experience.tsx` — Experience history and organizational roles.
- `src/config/Achievements.tsx` — Hackathons, leadership, and community milestones.
- `src/config/Meta.tsx` — SEO metadata, Open Graph preview, and site title.
