import { join } from "path";
import { remark } from "remark";
import { Article } from "../../types";
import { serialize } from "next-mdx-remote/serialize";
import { default as matter } from "gray-matter";
import { readdir, readFile } from "fs/promises";
import { default as remarkHtml } from "remark-html";
import { GetArticleProps, GetArticlesProps, GetArticlesPaths } from "./types";

export const ArticlesDir = join(process.cwd(), "data", "articles");

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
    source: await serialize(grayMatterFile.content),
    content: (await markdownToHTML(grayMatterFile.content)).value
  } as Article;
};

export const getArticles = async (props: GetArticlesProps) => {
  const dir = props.directory || ArticlesDir;
  const articles = await Promise.all(
    (await readdir(dir, { encoding: "utf-8" })).map((article) => getArticle({ path: article }))
  );

  return {
    nodes: articles,
    total: articles.length,
  };
};

export const getArticlesPaths = async (props: GetArticlesPaths) => {
  return (await readdir(props.directory || ArticlesDir)).map((path) => path.replace(/\.mdx?$/, ""));
};