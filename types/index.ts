import type { serialize } from "next-mdx-remote/serialize";

export type TextAlignment = "left" | "center" | "right";

export interface PageProps {
  className: string;
}

export interface Image {
  alt: string;
  src: string;
  type: string;
  width: number;
  height: number;
}

export interface ProjectLinks {
  github?: string;
  external?: string;
}

export interface Project {
  image: Image;
  title: string;
  links: ProjectLinks;
  techStacks: string[];
  description: string;
}

export interface Socials {
  website?: string;
  twitter?: string;
  linkedIn?: string;
}

export interface Article {
  id: string;
  tags: Array<string>;
  title: string;
  source: Awaited<ReturnType<typeof serialize>>;
  ogImage: Image;
  content: string;
  rawContent: string;
  isFeatured: boolean;
  isPublished: boolean;
  modifiedAt: string;
  publishedAt: string;
  coverImage: Image;
  previewText: string;
  author: {
    name: string;
    avatar: Image;
    socials: Socials;
  };
}
