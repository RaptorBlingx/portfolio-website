import Link from "next/link";
import type { ProjectFrontmatter } from "@/lib/types";
import { ProjectCardSlider } from "./ProjectCardSlider";

export function ProjectCard({ project }: { readonly project: ProjectFrontmatter }) {
  const cardImages =
    project.featuredImages && project.featuredImages.length > 0
      ? project.featuredImages
      : [project.featuredImage];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-xl border border-[var(--card-border)]
                 bg-[var(--card)] transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
    >
      <ProjectCardSlider images={cardImages} alt={project.title} />
      <div className="p-5">
        <div className="mb-2 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mb-1 text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--muted)]">{project.role} &middot; {project.period}</p>
        <p className="mt-2 line-clamp-2 text-sm text-[var(--muted)]">
          {project.summary}
        </p>
      </div>
    </Link>
  );
}
