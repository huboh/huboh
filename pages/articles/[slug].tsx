import { useRouter } from "next/router";
import { MDXRemote } from "next-mdx-remote";
import { default as readTime } from "reading-time";
import { NextPage, GetStaticPaths } from "next";

import { PageProps } from "../../types";
import { getArticlesPaths, getArticle } from "../../lib/articles";

// styles
import styles from "../../styles/pages/article.module.scss";

// components
import Tag from "../../components/Cards/Tag";
import Seo from "../../components/Seo";
import View from "../../components/View";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ShareArticle from "../../components/Cards/ShareArticle";

// mdx components
import Text from "../../components/Text";
import List from "../../components/List";
import Image from "../../components/Image";

interface ArticlePageProps extends PageProps, Omit<Awaited<ReturnType<typeof getStaticProps>>["props"], ""> { }

const componentsMap = {
  p: Text.Paragraph,
  h1: Text.Header.H1,
  h2: Text.Header.H2,
  // components
  Text: Text,
  List: List,
  Image: Image,
};

// untyped because i need to infer the return object type
const getStaticProps = async (context: any) => {
  return {
    props: {
      article: await getArticle({ path: context.params.slug + ".mdx" })
    }
  };
};

const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: (await getArticlesPaths({})).map((path) => ({ params: { slug: path } })),
    fallback: false,
  };
};

const Article: NextPage<ArticlePageProps> = (props) => {
  const router = useRouter();
  const article = props.article;
  const canonical = process.env.NEXT_PUBLIC_DOMAIN + router.asPath;
  const authorLink = (article.author.socials.linkedIn || process.env.NEXT_PUBLIC_LINKEDIN_LINK || "");

  return (
    <View className={ props.className }>
      <Seo
        title={ article.title }
        canonical={ canonical }
        description={ article.previewText }
        ogType={ "article" }
        ogAlt={ article.coverImage.alt }
        ogImage={ process.env.NEXT_PUBLIC_DOMAIN + article.coverImage.src }
        ogImageType={ article.ogImage.type }
        openGraph={ {
          url: canonical,
          type: "article",
          title: article.title,
          description: article.previewText,
          article: {
            tags: article.tags,
            modifiedTime: new Date(article.modifiedAt).toISOString(),
            publishedTime: new Date(article.publishedAt).toISOString(),
            authors: [authorLink],
          },
          images: [
            {
              alt: article.coverImage.alt,
              url: process.env.NEXT_PUBLIC_DOMAIN + article.coverImage.src,
              type: article.coverImage.type,
              width: article.coverImage.width,
              height: article.coverImage.height,
              secureUrl: process.env.NEXT_PUBLIC_DOMAIN + article.coverImage.src
            },
          ],
        } }
      />
      <Header
        id="header"
      />
      <main className={ styles["main"] }>
        <article className={ styles["article"] } itemScope itemType="http://schema.org/Article">
          <header>
            <hgroup>
              <Text.Header.H1
                text={ article.title }
                itemProp={ "headline" }
                className={ styles["title"] }
              />
              <address>
                <Text.Paragraph size={ "small" }>
                  <span>
                    by <Text.Link href={ authorLink } text={ `${article.author.name}` } target={ "_blank" } />&nbsp;&nbsp;•&nbsp;&nbsp;
                  </span>
                  <time
                    dateTime={ new Date(article.publishedAt).toISOString() }
                    children={ new Date(article.publishedAt).toDateString() }
                  />
                  <span>
                    &nbsp;&nbsp;•&nbsp;&nbsp;{ readTime(article.rawContent).text }
                  </span>
                </Text.Paragraph>
              </address>
            </hgroup>
            {
              article.coverImage.src && (
                <Image
                  alt={ article.coverImage.alt }
                  src={ article.coverImage.src }
                  width={ article.coverImage.width }
                  height={ article.coverImage.height }
                  priority={ true }
                  className={ styles["cover-image"] }
                  placeholder={ "empty" }
                />
              ) }
          </header>

          <MDXRemote { ...article.source } components={ componentsMap as any } />

          <List
            items={ article.tags }
            render={ (tag) => <Tag tag={ tag } /> }
            className={ styles["tags"] }
          />
        </article>
        <aside className={ styles["sidebar"] }>
          <ShareArticle
            link={ canonical }
            title={ article.title }
            header={ "spread the word 😁" }
          />
        </aside>
      </main>
      <Footer
        id="footer"
      />
    </View>
  );
};

export {
  getStaticPaths,
  getStaticProps,
  Article as default
};