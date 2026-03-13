import type { Metadata } from "next";
import { getProjects } from "@/lib/mdx";
import { ProjectGrid } from "@/components/ProjectGrid";
import { FadeInUp } from "@/components/Animations";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies and projects: EU R&D, industrial AI, energy management systems, IoT pipelines, and mobile applications.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <FadeInUp>
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl">Projects</h1>
        <p className="mb-10 text-lg text-[var(--muted)]">
          AI-native systems I&apos;ve architected and shipped — from 7-agent swarms to
          factory-floor voice assistants to 30+ machine IoT deployments.
        </p>
      </FadeInUp>
      <ProjectGrid projects={projects} />
    </section>
  );
}
