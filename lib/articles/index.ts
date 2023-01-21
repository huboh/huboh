import { join } from "path";
import { remark } from "remark";
import { Article } from "../../types";
import { readdir, readFile } from "fs/promises";
import { default as matter } from "gray-matter";
import { default as remarkHtml } from "remark-html";

interface GetArticleProps {
  path: string;
}

interface GetArticlesProps {
  directory?: string;
}

export const ArticlesDir = join(process.cwd(), "data", "articles");

/**
 * processor that converts markdown content to raw html
 */
export const markdownToHTML = async (md: string) => {
  return remark().use(remarkHtml).process(md);
};

export const getArticle = async (props: GetArticleProps) => {
  const path = join(ArticlesDir, props.path);
  const content = await readFile(path, { encoding: "utf-8" });
  const grayMatterFile = matter(content, { language: "yaml", delimiters: "---" });

  return {
    ...grayMatterFile.data,
    id: props.path.replace(/\.mdx?$/, ""),
    content: (await markdownToHTML(grayMatterFile.content)).value
  } as Article;
};

export const getArticles = async (props: GetArticlesProps) => {
  return Promise.all(
    (await readdir(props.directory || ArticlesDir)).map((article) => getArticle({ path: article }))
  );
};