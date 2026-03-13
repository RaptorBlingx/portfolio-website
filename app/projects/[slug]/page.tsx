import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjectBySlug, getProjectSlugs } from "@/lib/mdx";
import { MermaidDiagram } from "@/components/MermaidDiagram";
import { ImageGallery } from "@/components/ImageGallery";

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const { frontmatter } = project;
  return {
    title: frontmatter.title,
    description: frontmatter.summary,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.summary,
      images: [{ url: frontmatter.featuredImage }],
    },
  };
}

const mdxComponents = {
  MermaidDiagram,
  ImageGallery,
  img: (
    props: Readonly<React.ComponentProps<typeof Image> & { src: string; alt: string }>
  ) => (
    <Image
      {...props}
      width={800}
      height={450}
      className="rounded-lg my-6"
      alt={props.alt}
    />
  ),
};

export default async function ProjectPage({
  params,
}: {
  readonly params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { frontmatter, content } = project;

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      {/* Back link */}
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-primary transition-colors"
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Projects
      </Link>

      {/* At a Glance */}
      <header className="mb-10">
        <div className="mb-4 flex flex-wrap gap-2">
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mb-3 text-3xl font-bold sm:text-4xl">
          {frontmatter.title}
        </h1>
        <p className="text-lg text-[var(--muted)]">{frontmatter.summary}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--muted)]">
          <span>
            <strong className="text-[var(--foreground)]">Role:</strong>{" "}
            {frontmatter.role}
          </span>
          <span>
            <strong className="text-[var(--foreground)]">Period:</strong>{" "}
            {frontmatter.period}
          </span>
          {frontmatter.funding && (
            <span>
              <strong className="text-[var(--foreground)]">Funding:</strong>{" "}
              {frontmatter.funding}
            </span>
          )}
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          {frontmatter.demoUrl && (
            <a
              href={frontmatter.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
            >
              Live Demo
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
          {frontmatter.github && (
            <a
              href={frontmatter.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--card-border)] px-4 py-2 text-sm font-medium hover:bg-[var(--muted-bg)] transition-colors"
            >
              View Code
              <svg
                className="h-3.5 w-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
        {/* Metrics */}
        {frontmatter.metrics &&
          Object.keys(frontmatter.metrics).length > 0 && (
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {Object.entries(frontmatter.metrics).map(([key, value]) => (
                <div
                  key={key}
                  className="rounded-lg border border-[var(--card-border)] bg-[var(--card)] p-4 text-center"
                >
                  <p className="text-2xl font-bold text-primary">{value}</p>
                  <p className="text-xs text-[var(--muted)] capitalize">
                    {key.replaceAll("_", " ")}
                  </p>
                </div>
              ))}
            </div>
          )}
      </header>

      {/* Hero image */}
      <div className="relative mb-10 aspect-video overflow-hidden rounded-xl bg-[var(--muted-bg)]">
        <Image
          src={frontmatter.featuredImage}
          alt={frontmatter.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* MDX Content */}
      <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </article>
  );
}
