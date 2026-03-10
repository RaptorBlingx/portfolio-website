import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeInUp } from "@/components/Animations";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mohamad Jarad — AI-Augmented Software Engineer. Building production industrial AI systems, EnMS platforms, and agent-driven workflows for EU R&D projects.",
};

const timeline = [
  {
    period: "2025–2026",
    title: "Lead Developer — AVAROS",
    desc: "Leading AI digital assistant development for sustainable manufacturing under the EU WASABI consortium. Designed architecture, supervised team, integrated OVOS + DocuBoT + PREVENTION modules.",
  },
  {
    period: "2024–2025",
    title: "Core Developer — HumanEnerDIA",
    desc: "Built production EnMS with OVOS voice assistant, RASA chatbot, and FastAPI analytics. Integrated LLMs for intelligent energy guidance aligned with ISO 50001.",
  },
  {
    period: "2024–2025",
    title: "Developer — LAUDS Demonstrator",
    desc: "Deployed modular energy management demonstrator across FabCity Hamburg sites. Built ESP32 sensor hubs, Node-RED pipelines, and Grafana dashboards.",
  },
  {
    period: "2024",
    title: "Architect — Fin-CoPilot",
    desc: "Designed Flutter-based conversational finance app with Google Gemini 2.5 Flash multi-agent architecture.",
  },
];

const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Russian", level: "Conversational" },
  { name: "Turkish", level: "Basic" },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <FadeInUp>
        <h1 className="mb-8 text-3xl font-bold sm:text-4xl">About Me</h1>
      </FadeInUp>

      <div className="mb-12 flex flex-col gap-8 sm:flex-row sm:items-start">
        <FadeInUp>
          <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-2xl bg-[var(--muted-bg)]">
            <Image
              src="/assets/headshot.jpg"
              alt="Mohamad Jarad"
              fill
              className="object-cover"
              priority
            />
          </div>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <div>
            <h2 className="mb-2 text-xl font-semibold">Mohamad Jarad</h2>
            <p className="mb-1 text-sm text-primary font-medium">
              AI-Augmented Software Engineer | AI Systems Builder | Industrial
              AI &amp; EU R&amp;D
            </p>
            <p className="mb-4 text-sm text-[var(--muted)]">
              Mersin, Türkiye
            </p>
            <p className="text-[var(--muted)] leading-relaxed">
              I design and ship production industrial AI systems and
              agent-driven development workflows for EU-funded projects. I build
              AI assistants (voice &amp; text), EnMS platforms, and scalable IoT
              pipelines — turning research and proposals into running systems. I
              lead architecture, integrate LLMs &amp; agents, and orchestrate
              AI-augmented development workflows to accelerate delivery while
              keeping production reliability.
            </p>
            <div className="mt-4">
              <a
                href="/assets/mohamad-jarad-cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
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
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </FadeInUp>
      </div>

      {/* Work Timeline */}
      <FadeInUp>
        <h2 className="mb-6 text-2xl font-bold">Experience</h2>
      </FadeInUp>
      <div className="mb-12 space-y-6">
        {timeline.map((item, i) => (
          <FadeInUp key={item.title} delay={i * 0.1}>
            <div className="relative border-l-2 border-primary/30 pl-6">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-[var(--background)]" />
              <p className="text-xs font-medium text-primary">{item.period}</p>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-[var(--muted)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </FadeInUp>
        ))}
      </div>

      {/* Languages */}
      <FadeInUp>
        <h2 className="mb-4 text-2xl font-bold">Languages</h2>
      </FadeInUp>
      <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {languages.map((lang) => (
          <FadeInUp key={lang.name}>
            <div className="rounded-lg border border-[var(--card-border)] bg-[var(--card)] p-4 text-center">
              <p className="font-semibold">{lang.name}</p>
              <p className="text-sm text-[var(--muted)]">{lang.level}</p>
            </div>
          </FadeInUp>
        ))}
      </div>

      {/* Tech Stack */}
      <FadeInUp>
        <h2 className="mb-4 text-2xl font-bold">Technical Skills</h2>
      </FadeInUp>
      <FadeInUp delay={0.1}>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              category: "Languages & Frameworks",
              items:
                "Python, JavaScript/TypeScript, React, Next.js, FastAPI, Node.js, Dart (Flutter), C/C++",
            },
            {
              category: "AI & ML",
              items:
                "LLM integration, RAG, embeddings, prompt engineering, TensorFlow, PyTorch, OVOS, RASA, Gemini, multi-agent workflows",
            },
            {
              category: "DevOps & Infrastructure",
              items:
                "Docker, Docker-Compose, Vercel, GitHub Actions, Grafana, Linux, PostgreSQL, TimescaleDB, Redis",
            },
            {
              category: "IoT & Hardware",
              items:
                "ESP32, Raspberry Pi, MQTT, Modbus TCP, Shelly Plugs, Node-RED, sensor hubs (MPU6050, MAX6675, DHT22)",
            },
          ].map((group) => (
            <div
              key={group.category}
              className="rounded-lg border border-[var(--card-border)] bg-[var(--card)] p-5"
            >
              <h3 className="mb-2 text-sm font-semibold text-primary">
                {group.category}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {group.items}
              </p>
            </div>
          ))}
        </div>
      </FadeInUp>

      {/* CTA */}
      <div className="mt-12 text-center">
        <FadeInUp>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Get in Touch
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}
