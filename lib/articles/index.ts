import { join } from "path";
import { remark } from "remark";
import { Article } from "../../types";
import { serialize } from "next-mdx-remote/serialize";
import { ArticlesPath } from "../../constants";
import { readdir, readFile } from "fs/promises";
import { default as matter, } from "gray-matter";
import { default as remarkHtml } from "remark-html";
import { default as rehypePrismPlus } from "rehype-prism-plus";
import { default as rehypeCodeTitles } from 'rehype-code-titles';
import { GetArticleProps, GetArticlesProps, GetArticlesPaths } from "./types";

export const markdownToHTML = async (md: string) => remark().use(remarkHtml).process(md);

export const getArticle = async (props: GetArticleProps): Promise<Article> => {
  const path = join(ArticlesPath, props.path);
  const content = await readFile(path, { encoding: "utf-8" });
  const grayMatterFile = matter(content, { language: "yaml", delimiters: "---" });

  return {
    ...grayMatterFile.data as Article,
    id: props.path.replace(/\.mdx?$/, ""),
    content: (await markdownToHTML(grayMatterFile.content)).value.toString(),
    modifiedAt: grayMatterFile.data.modifiedAt || grayMatterFile.data.publishedAt,
    publishedAt: grayMatterFile.data.publishedAt,
    rawContent: grayMatterFile.content,
    source: await serialize(grayMatterFile.content, {
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [
          rehypeCodeTitles, // order matters or else it throws parsing error for file titles
          rehypePrismPlus,
        ]
      }
    })
  };
};

export const getArticles = async (props: GetArticlesProps) => {
  const dir = props.directory || ArticlesPath;
  const paths = await readdir(dir, { encoding: "utf-8" });
  const articles = (await Promise.all(paths.map((path) => getArticle({ path }))))
    .filter(
      (article) => article.isPublished &&
        (props.featured ? article.isFeatured : true) &&
        (!props.tag ? true : article.tags.includes(props.tag))
    )
    .sort(
      (aArticle, bArticle) => new Date(bArticle.publishedAt).getTime() - new Date(aArticle.publishedAt).getTime()
    )
    .slice(
      0, props.count
    )
    .map(
      (article) => !(props.previewMode ?? true) ? article : Object.assign(article, { content: "", source: {}, author: {} } as Partial<Article>)
    );

  return {
    nodes: articles,
    total: articles.length,
  };
};

export const getArticlesPaths = async (props: GetArticlesPaths) => {
  return (await readdir(props.directory || ArticlesPath)).map((path) => path.replace(/\.mdx?$/, ""));
};