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
            AI-Augmented Software Engineer
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
            I design and ship production industrial AI systems and agent-driven
            development workflows for EU-funded projects. I build AI assistants,
            EnMS platforms, and scalable IoT pipelines — turning research and
            proposals into running systems.
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
                title: "AI & LLM Integration",
                desc: "RAG pipelines, multi-agent systems, prompt engineering, voice & text assistants (OVOS, RASA, Gemini)",
              },
              {
                title: "Industrial IoT",
                desc: "ESP32 sensor hubs, MQTT, Modbus TCP, Grafana dashboards, real-time data pipelines",
              },
              {
                title: "Full-Stack Development",
                desc: "React, Next.js, FastAPI, Node.js, Flutter, Docker, PostgreSQL, TimescaleDB",
              },
              {
                title: "EU R&D Delivery",
                desc: "End-to-end project delivery from proposal to production pilot, field deployments, ISO 50001",
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
            Let&apos;s build production AI systems
          </h2>
          <p className="mb-6 text-[var(--muted)]">
            Open to leadership roles, remote Applied AI positions, and EU
            R&amp;D collaborations.
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
