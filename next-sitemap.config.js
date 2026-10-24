const { getArticlesPaths, getArticles } = require("./lib/sitemap");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DOMAIN || 'http://localhost:3000',
  generateRobotsTxt: true, // (optional)
  additionalPaths: async () => {
    const tags = new Set();
    const articles = (await getArticles({})).nodes;
    const articleSlugs = await getArticlesPaths({});

    articles.forEach(
      (article) => {
        article.tags.forEach((tag) => tags.add(tag));
      }
    );

    return [
      ...articleSlugs.map(
        (slug) => ({ loc: `/articles/${slug}` })
      ),
      ...Array.from(tags).map(
        (slug) => ({ loc: `/tags/${slug}` })
      )
    ];
  }
};