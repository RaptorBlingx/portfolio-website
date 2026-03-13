import Link from "next/link";
import { getFeaturedProjects } from "@/lib/mdx";
import { ProjectGrid } from "@/components/ProjectGrid";
import { FadeInUp } from "@/components/Animations";

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeInUp>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            AI-Native Software Engineer
          </p>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            I build production{" "}
            <span className="text-primary">AI systems</span> for
            <br className="hidden sm:block" /> industrial &amp; EU R&amp;D
            projects
          </h1>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <p className="mb-8 max-w-2xl text-lg text-[var(--muted)] leading-relaxed">
            From 7-agent AI swarms on Gemini to voice-first factory assistants,
            from custom ESP32 firmware to 19.2M-reading analytics platforms —
            I architect, build, and ship production AI systems end-to-end.
            Every project is AI-native: built with AI agents, powered by AI.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.3}>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold
                         text-white transition-colors hover:bg-primary-dark"
            >
              View Projects
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-[var(--card-border)]
                         px-6 py-3 text-sm font-semibold transition-colors
                         hover:bg-[var(--muted-bg)] hover:border-primary/50"
            >
              Get in Touch
            </Link>
          </div>
        </FadeInUp>
      </section>

      {/* Featured Projects */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <FadeInUp>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Featured Projects
              </h2>
              <p className="mt-2 text-[var(--muted)]">
                EU R&amp;D, industrial AI, and production systems
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden text-sm font-medium text-primary hover:text-primary-light transition-colors sm:block"
            >
              View all &rarr;
            </Link>
          </div>
        </FadeInUp>
        <ProjectGrid projects={featured} showFilters={false} />
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/projects"
            className="text-sm font-medium text-primary hover:text-primary-light"
          >
            View all projects &rarr;
          </Link>
        </div>
      </section>

      {/* Skills / Tech Section */}
      <section className="border-t border-[var(--card-border)] bg-[var(--muted-bg)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <FadeInUp>
            <h2 className="mb-8 text-center text-2xl font-bold">
              Core Expertise
            </h2>
          </FadeInUp>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "AI & Multi-Agent Systems",
                desc: "7-agent AI swarms, RAG pipelines, OVOS voice skills, RASA chatbots, Gemini 2.5 Flash, LLM orchestration, prompt engineering",
              },
              {
                title: "Industrial IoT & Hardware",
                desc: "Custom ESP32 firmware (C++), MQTT/Modbus, 30+ monitored machines, Grafana dashboards, Node-RED pipelines, TimescaleDB",
              },
              {
                title: "Full-Stack & Mobile",
                desc: "React, Next.js, FastAPI, Flutter, Electron, Docker-Compose, PostgreSQL, Firebase — web, mobile, and desktop",
              },
              {
                title: "EU R&D & Production Delivery",
                desc: "3 FabLab field deployments, WASABI consortium, ISO 50001 compliance, Clean Architecture, team leadership",
              },
            ].map((skill, i) => (
              <FadeInUp key={skill.title} delay={i * 0.1}>
                <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6">
                  <h3 className="mb-2 font-semibold">{skill.title}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 text-center">
        <FadeInUp>
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
            Let&apos;s build something real
          </h2>
          <p className="mb-6 text-[var(--muted)]">
            Open to AI engineering leadership, Applied AI roles, and EU
            R&amp;D collaborations. I ship production systems, not prototypes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold
                       text-white transition-colors hover:bg-primary-dark"
          >
            Contact Me
          </Link>
        </FadeInUp>
      </section>
    </>
  );
}
