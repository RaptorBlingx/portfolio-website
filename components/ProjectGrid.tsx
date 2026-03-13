"use client";

import { useState } from "react";
import type { ProjectFrontmatter } from "@/lib/types";
import { ProjectCard } from "./ProjectCard";
import { FadeInUp } from "./Animations";

export function ProjectGrid({
  projects,
  showFilters = true,
}: {
  readonly projects: ProjectFrontmatter[];
  readonly showFilters?: boolean;
}) {
  const [activeTag, setActiveTag] = useState<string>("All");

  const allTags = [
    "All",
    ...Array.from(new Set(projects.flatMap((p) => p.tags))).sort((a, b) =>
      a.localeCompare(b)
    ),
  ];

  const filtered = activeTag === "All"
    ? projects
    : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <div>
      {showFilters && (
        <div className="mb-8 flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeTag === tag
                  ? "bg-primary text-white"
                  : "bg-[var(--muted-bg)] text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <FadeInUp key={project.slug} delay={i * 0.1}>
            <ProjectCard project={project} />
          </FadeInUp>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center py-12 text-[var(--muted)]">
          No projects found for &ldquo;{activeTag}&rdquo;.
        </p>
      )}
    </div>
  );
}
