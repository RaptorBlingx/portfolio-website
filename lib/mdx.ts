import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { ProjectFrontmatter, BlogFrontmatter } from "./types";

const projectsDir = path.join(process.cwd(), "content/projects");
const blogDir = path.join(process.cwd(), "content/blog");

export function getProjects(): ProjectFrontmatter[] {
  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith(".mdx"));
  const projects = files.map((filename) => {
    const filePath = path.join(projectsDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return {
      ...data,
      slug: filename.replace(/\.mdx$/, ""),
    } as ProjectFrontmatter;
  });
  return projects.sort((a, b) => {
    const yearA = parseInt(a.period.split("–")[0]);
    const yearB = parseInt(b.period.split("–")[0]);
    return yearB - yearA;
  });
}

export function getFeaturedProjects(): ProjectFrontmatter[] {
  return getProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string) {
  const filePath = path.join(projectsDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return {
    frontmatter: { ...data, slug } as ProjectFrontmatter,
    content,
  };
}

export function getProjectSlugs(): string[] {
  return fs
    .readdirSync(projectsDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getBlogPosts(): BlogFrontmatter[] {
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((filename) => {
    const filePath = path.join(blogDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return {
      ...data,
      slug: filename.replace(/\.mdx$/, ""),
    } as BlogFrontmatter;
  });
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPostBySlug(slug: string) {
  const filePath = path.join(blogDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return {
    frontmatter: { ...data, slug } as BlogFrontmatter,
    content,
  };
}

export function getBlogSlugs(): string[] {
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllTags(): string[] {
  const projects = getProjects();
  const tagSet = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}
