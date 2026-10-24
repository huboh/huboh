// types
import type { Params } from "./page.types";
import type { Page, GeneratePageMetadata } from "@/types";

// utils
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getCurrentUrl } from "@/middleware";
import { joinClassStrings } from "@/lib";
import { default as readTime } from "reading-time";
import { articleMdxOpts, getArticle } from "@/lib/articles";

// styles
import styles from "@/styles/pages/article.module.scss";
import h2Styles from "@/components/Text/components/Header/styles/h2.module.scss";
import headerStyles from "@/components/Text/components/Header/styles/header.module.scss";

// components
import Tag from "@/components/Cards/Tag";
import View from "@/components/View";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareArticle from "@/components/Cards/ShareArticle";

// mdx components
import Text from "@/components/Text";
import List from "@/components/List";
import Image from "@/components/Image";

const headerClass = joinClassStrings(headerStyles["text-header"], h2Styles["h2"]);

const componentsMap = {
  p: Text.Paragraph,
  h1: Text.Header.H1,
  h2: Text.Header.H2,
  h3: (props: any) => <h3 children={ props.children } className={ headerClass } />,
  h4: (props: any) => <h4 children={ props.children } className={ headerClass } />,
  h5: (props: any) => <h5 children={ props.children } className={ headerClass } />,
  h6: (props: any) => <h6 children={ props.children } className={ headerClass } />,

  // components
  Text: Text,
  List: List,
  Image: Image,
};


const generateMetadata: GeneratePageMetadata<Params> = async (props) => {
  const params = await props.params;
  const article = await getArticle({ path: params.articleId + ".mdx" });
  const canonical = getCurrentUrl(await headers());
  const authorLink = (article.author.socials.linkedIn || process.env.NEXT_PUBLIC_LINKEDIN_LINK || "");

  return {
    title: article?.title,
    alternates: {
      canonical: canonical
    },
    openGraph: {
      title: article?.title,
      description: article.previewText,
      url: canonical,
      type: "article",
      tags: article.tags,
      modifiedTime: new Date(article.modifiedAt).toISOString(),
      publishedTime: new Date(article.publishedAt).toISOString(),
      authors: [authorLink],
      images: [{
        alt: article.coverImage.alt,
        url: process.env.NEXT_PUBLIC_DOMAIN + article.coverImage.src,
        type: article.coverImage.type,
        width: article.coverImage.width,
        height: article.coverImage.height,
        secureUrl: process.env.NEXT_PUBLIC_DOMAIN + article.coverImage.src
      }],
    },
  };
};

// cast it to any to bypass TypeScript's JSX check during build
const MDXRemoteComponent = MDXRemote as any;

const Article: Page<unknown, Params> = async (props) => {
  const params = await props.params;
  const article = await getArticle({ path: params.articleId + ".mdx" });
  const canonical = getCurrentUrl(await headers());
  const authorLink = (article.author.socials.linkedIn || process.env.NEXT_PUBLIC_LINKEDIN_LINK || "");

  if (!article) {
    return notFound();
  }

  return (
    <View>
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

          <MDXRemoteComponent
            source={ article.rawContent }
            options={ articleMdxOpts }
            components={ componentsMap as any }
          />

          <List
            items={ article.tags }
            render={ (tag) => <Tag tag={ `#${tag}` } path={ tag } /> }
            className={ styles["tags"] }
          />
        </article>

        <aside className={ styles["sidebar"] }>
          <ShareArticle
            link={ canonical.toString() }
            title={ article.title }
            header={ "spread the word 👀🫶" }
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
  Article as default,
  generateMetadata
};