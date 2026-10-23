import type { serialize } from "next-mdx-remote/serialize";
import type { FC, ReactNode } from "react";
import type { Metadata, ResolvingMetadata } from "next";

export type OptionalObj = Record<string, any>;

export type TextAlignment = "left" | "center" | "right";

export type Context = {
  renderPage: () => Promise<ReactNode>;
};

export interface NextFC<
  Props = {}
> extends Pick<
  FC<Props>, "displayName"
> {
  (props: Props, content?: Context): ReactNode | Promise<ReactNode>;
};

export type Page<
  Props = { className?: string; },
  Params = DefaultParams,
  SearchParams = DefaultSearchParams,
  P = (Props & PageProps<Params, SearchParams>)
> = (
    NextFC<P>
  );

export type Layout<
  Props = {},
  Params = DefaultParams,
  P = (Props & LayoutProps<Params>)
> = (
    NextFC<P>
  );

export type ErrorPage<Props = GlobalErrorProps> = (
  NextFC<Props>
);

export type GeneratePageMetadata<
  Params = DefaultParams,
  SearchParams = DefaultSearchParams
> = (
    (props: PageProps<Params, SearchParams>, parent: ResolvingMetadata) => Promise<Metadata>
  );

export type GenerateLayoutMetadata<Params = DefaultParams> = (
  (props: Omit<PageProps<Params>, "searchParams">, parent: ResolvingMetadata) => Promise<Metadata>
);

export type PageProps<Params = DefaultParams, SearchParams = DefaultSearchParams> = {
  params: Promise<Params>;
  className?: string;
  searchParams: Promise<SearchParams>;
};

export type LayoutProps<T = OptionalObj> = {
  params: Promise<T>;
  children: ReactNode;
};

export type GlobalErrorProps = {
  reset: VoidFunction;
  error: Error & {
    digest?: string;
  };
};

export type DefaultParams = {
  [key: string]: string | undefined;
};

export type DefaultSearchParams = {
  [key: string]: string | string[] | undefined;
};

export type DefaultComponentProps = {
  children?: ReactNode;
  className?: string;
};


//
//
//

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
