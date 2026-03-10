import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/mdx";
import { FadeInUp } from "@/components/Animations";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles on AI-augmented development, industrial energy management, and EU R&D project delivery.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <FadeInUp>
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl">Blog</h1>
        <p className="mb-10 text-lg text-[var(--muted)]">
          Technical articles on AI systems, agentic development, and EU R&amp;D.
        </p>
      </FadeInUp>

      {posts.length === 0 ? (
        <FadeInUp>
          <p className="text-[var(--muted)]">Coming soon — stay tuned.</p>
        </FadeInUp>
      ) : (
        <div className="space-y-8">
          {posts.map((post, i) => (
            <FadeInUp key={post.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-2 flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
                  <time>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  {post.readingTime && <span>&middot; {post.readingTime}</span>}
                </div>
                <h2 className="mb-2 text-xl font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-[var(--muted)] leading-relaxed">
                  {post.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </FadeInUp>
          ))}
        </div>
      )}
    </section>
  );
}
