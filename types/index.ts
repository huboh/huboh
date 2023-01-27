export type TextAlignment = "left" | "center" | "right";

export interface PageProps {
  className: string;
}

export interface Image {
  alt: string;
  src: string;
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

export interface Article {
  id: string;
  date: string;
  title: string;
  content: string;
  coverImage: Image;
  previewText: string;
  author: {
    name: string;
    avatar: Image;
  };
  ogImage: {
    url: Image;
  };
}
