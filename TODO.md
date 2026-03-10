# Portfolio Website — Implementation Plan

> **Owner:** Mohamad Jarad | **Repo:** RaptorBlingx/portfolio-website  
> **Stack:** Next.js 15 (App Router) + Tailwind CSS v4 + MDX + TypeScript  
> **Hosting:** Vercel (free tier) | **Domain:** jarad.dev (buy later)  
> **Contact email:** swe.jarad@gmail.com  

---

## Phase 1: Project Setup & Infrastructure

- [x] **1.1** Initialize Next.js 15 project with TypeScript + Tailwind CSS v4 + App Router
- [x] **1.2** Install dependencies: `next-mdx-remote`, `gray-matter`, `next-themes`, `framer-motion`, `next-sitemap`, `resend`, `mermaid`
- [x] **1.3** Set up folder structure:
  ```
  app/           — pages (App Router)
  components/    — reusable React components
  content/
    projects/    — MDX case studies
    blog/        — MDX blog posts
  lib/           — utilities (MDX loader, types)
  public/assets/ — images, CV PDF, OG images
  ```
- [x] **1.4** Configure `next.config.ts` (images, headers, etc.)
- [x] **1.5** Configure Tailwind: custom colors (teal accent), dark mode `class` strategy, typography
- [x] **1.6** Set up `next-themes` for dark mode toggle

---

## Phase 2: Layout & Core Components

- [x] **2.1** Root layout (`app/layout.tsx`): HTML structure, metadata defaults, ThemeProvider, skip-to-content link
- [x] **2.2** Header/Navbar: logo/name, nav links (Home, Projects, About, Blog, Contact), dark mode toggle, mobile hamburger menu
- [x] **2.3** Footer: social links (GitHub, LinkedIn), copyright, email
- [x] **2.4** ThemeToggle component (sun/moon icon)
- [x] **2.5** ProjectCard component (image, title, tags, summary, link)
- [x] **2.6** ProjectGrid component (grid layout + tag filter buttons)
- [x] **2.7** MermaidDiagram component (renders Mermaid syntax client-side)
- [x] **2.8** ContactForm component (name, email, message, honeypot field)
- [x] **2.9** MDX components map (custom heading, code blocks, callouts)
- [x] **2.10** Animations: framer-motion wrappers (FadeIn, SlideUp) — subtle only

---

## Phase 3: MDX Pipeline

- [x] **3.1** `lib/mdx.ts`: functions to read MDX files, parse frontmatter with gray-matter, return typed data
- [x] **3.2** `lib/types.ts`: TypeScript types for project frontmatter and blog frontmatter
- [x] **3.3** `getProjects()` — returns all projects sorted by date
- [x] **3.4** `getProjectBySlug(slug)` — returns single project with MDX source
- [x] **3.5** `getBlogPosts()` and `getBlogPostBySlug(slug)` — same for blog
- [x] **3.6** `generateStaticParams()` for dynamic routes

---

## Phase 4: Pages

- [x] **4.1** **Home** (`app/page.tsx`): Hero section (headline, bio, 2 CTA buttons) + Featured projects (5 cards) + Brief skills/tech section
- [x] **4.2** **Projects** (`app/projects/page.tsx`): All projects grid with tag filter buttons (EU R&D, AI, Mobile, IoT, Hardware)
- [x] **4.3** **Case Study** (`app/projects/[slug]/page.tsx`): Dynamic MDX page — at-a-glance box, MDX body (Problem, Role, Architecture, Tech, Demo, Impact, Lessons), prev/next navigation
- [x] **4.4** **About** (`app/about/page.tsx`): Photo, expanded bio, work timeline, languages, education, CV download button
- [x] **4.5** **Blog index** (`app/blog/page.tsx`): List of blog posts with date, title, summary
- [x] **4.6** **Blog post** (`app/blog/[slug]/page.tsx`): Dynamic MDX page for blog
- [x] **4.7** **Contact** (`app/contact/page.tsx`): Contact form + direct links (email, LinkedIn, GitHub)
- [x] **4.8** **API route** (`app/api/contact/route.ts`): Serverless function — validate input, honeypot check, send email via Resend

---

## Phase 5: Content — MDX Case Studies (Tier 1)

- [x] **5.1** `content/projects/avaros.mdx` — AVAROS: Lead Developer, EU WASABI, OVOS + DocuBoT + PREVENTION, Docker-Compose, impact metrics
- [x] **5.2** `content/projects/humanenerdia.mdx` — HumanEnerDIA: Core Developer, OVOS + RASA, FastAPI, TimescaleDB, ISO 50001
- [x] **5.3** `content/projects/lauds.mdx` — LAUDS: Developer, FabCity Hamburg, ESP32, Node-RED, Grafana, LIVE DEMO link
- [x] **5.4** `content/projects/fin-copilot.mdx` — Fin-CoPilot: Architect, Flutter + Gemini multi-agent, conversational finance
- [x] **5.5** `content/projects/promptvault.mdx` — PromptVault Pro: Creator, React + Electron + Gemini, prompt management

---

## Phase 6: Content — Tier 2 Project Cards + Blog

- [x] **6.1** `content/projects/smart-home-enms.mdx` — Smart Home ENMS (brief card, no full case study body)
- [x] **6.2** `content/projects/esp32-sensor-hub.mdx` — ESP32 Sensor Hub (brief card)
- [x] **6.3** `content/projects/finger-chooser.mdx` — Finger Chooser Flutter game (brief card)
- [x] **6.4** `content/projects/brain-tumor-detection.mdx` — Brain Tumor CNN (brief card)
- [x] **6.5** `content/blog/agentic-development.mdx` — "Agentic Development in VS Code" blog post
- [x] **6.6** `content/blog/building-enms.mdx` — "Building EnMS" blog post

---

## Phase 7: SEO, Performance & Accessibility

- [x] **7.1** Next.js `metadata` API: per-page titles, descriptions, OG tags, Twitter cards
- [ ] **7.2** Default OG image (`public/og-image.png`) — 1200x630 placeholder
- [x] **7.3** JSON-LD structured data: `Person` + `WebSite` schema in root layout
- [x] **7.4** `next-sitemap` config → generates sitemap.xml + robots.txt at build time
- [x] **7.5** Image optimization: all images via `next/image`, WebP format, lazy loading
- [x] **7.6** Font: Inter via `next/font/google` (zero layout shift, no external request)
- [x] **7.7** Skip-to-content link, aria labels, keyboard navigation, color contrast >4.5:1
- [x] **7.8** CSP + security headers in `next.config.ts`
- [ ] **7.9** framer-motion: respect `prefers-reduced-motion`

---

## Phase 8: Git, Deploy & Documentation

- [ ] **8.1** Initialize git, create `.gitignore`
- [ ] **8.2** Initial commit and push to `RaptorBlingx/portfolio-website` on GitHub
- [x] **8.3** Comprehensive `README.md`: local dev, build, deploy, how to add projects (MDX template), how to add blog posts
- [x] **8.4** Verify `npm run build` succeeds with zero errors
- [ ] **8.5** Connect GitHub repo to Vercel (user action — I'll provide step-by-step instructions)
- [ ] **8.6** Buy jarad.dev + DNS config (user action — I'll provide step-by-step instructions when ready)

---

## User Actions Required (I'll prompt when needed)

- 🔲 **Connect repo to Vercel** — I'll provide exact steps
- 🔲 **Add headshot photo** to `public/assets/headshot.jpg`
- 🔲 **Add CV PDF** to `public/assets/mohamad-jarad-cv.pdf`
- 🔲 **Add project screenshots** to `public/assets/{project}/`
- 🔲 **Create Resend account** (free) and add API key to Vercel env vars
- 🔲 **Buy jarad.dev** on Porkbun + configure DNS → Vercel (I'll guide you)
- 🔲 **Browser testing** on mobile + desktop after deploy
- 🔲 **Review & approve content** in case studies (check accuracy of my descriptions)

---

## Progress Log

| Date | What was done |
|------|---------------|
| — | Plan created, ready to start Phase 1 |
