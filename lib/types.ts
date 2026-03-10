export interface ProjectFrontmatter {
  title: string;
  slug: string;
  role: string;
  period: string;
  funding?: string;
  tags: string[];
  featuredImage: string;
  demoUrl?: string;
  github?: string;
  summary: string;
  tier: 1 | 2;
  featured?: boolean;
  metrics?: Record<string, string>;
}

export interface BlogFrontmatter {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  summary: string;
  featuredImage?: string;
  readingTime?: string;
}

export interface Project extends ProjectFrontmatter {
  content: string;
}

export interface BlogPost extends BlogFrontmatter {
  content: string;
}
