export interface GetArticleProps {
  path: string;
}

export interface GetArticlesProps {
  tag?: string;
  count?: number;
  featured?: boolean;
  directory?: string;
  previewMode?: boolean;
}

export interface GetArticlesPaths {
  directory?: string;
}
