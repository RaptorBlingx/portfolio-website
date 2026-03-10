# jarad.dev — Portfolio Website

Personal portfolio and project showcase for **Mohamad Jarad** — AI-Augmented Systems Engineer & Lead Developer.

**Live:** [jarad.dev](https://jarad.dev) (coming soon)

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **Content:** MDX files (frontmatter + markdown)
- **Animations:** Framer Motion
- **Dark Mode:** next-themes
- **Diagrams:** Mermaid.js
- **Contact:** Resend API
- **Hosting:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/                  # Next.js App Router pages
  page.tsx            # Home
  about/              # About page
  projects/           # Projects listing + [slug] case studies
  blog/               # Blog listing + [slug] posts
  contact/            # Contact form
  api/contact/        # Contact form API route
components/           # Reusable React components
content/
  projects/           # MDX case study files
  blog/               # MDX blog post files
lib/
  mdx.ts              # MDX reading utilities
  types.ts            # TypeScript type definitions
public/assets/        # Images, CV PDF, project screenshots
```

## Adding a New Project

Create a new `.mdx` file in `content/projects/`:

```mdx
---
title: "Project Name"
role: "Your Role"
period: "2024–2025"
tags: ["AI", "Full-Stack"]
featuredImage: "/assets/projects/project-hero.png"
summary: "One-line summary."
tier: 1
featured: true
metrics:
  key_metric: "value"
---

Your markdown content here...
```

- **tier: 1** — Full case study with detailed sections
- **tier: 2** — Brief card with short description
- **featured: true** — Shows on home page

## Adding a Blog Post

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Post Title"
date: "2025-01-15"
tags: ["AI", "Development"]
summary: "Brief description."
---

Your markdown content here...
```

## Environment Variables

For the contact form to send emails:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=swe.jarad@gmail.com
```

Without `RESEND_API_KEY`, the contact form logs submissions to the console (development mode).

## Deployment

1. Push to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

## Building

```bash
npm run build    # Builds + generates sitemap
npm run start    # Serve production build locally
```

## License

MIT
