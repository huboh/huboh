// types
import type { Page, GeneratePageMetadata } from "@/types";

// utils
import { headers } from "next/headers";
import { getArticles } from "@/lib/articles";
import { getCurrentUrl } from "@/middleware";

// mdx components
import Masonry from "./page.masonry";

// styles
import styles from "@/styles/pages/tag.module.scss";

// components
import View from "@/components/View";
import Text from "@/components/Text";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Article from "@/components/Cards/Article";

type Params = {
  tagId: string;
};

const generateMetadata: GeneratePageMetadata<Params> = async (props) => {
  const tag = (await props.params).tagId;

  return {
    title: `Articles tagged with ${tag}`,
    alternates: {
      canonical: getCurrentUrl(await headers())
    },
    openGraph: {
      title: `Articles tagged with ${tag}`,
    },
  };
};

const Tag: Page<unknown, Params> = async (props) => {
  const tag = (await props.params).tagId;
  const articles = await getArticles({ tag });

  return (
    <View className={ styles["tag"] }>
      <Header
        id="header"
      />
      <main className={ styles["main"] }>
        <hgroup>
          <Text.Header.H1 text={ tag } />
          <Text.Paragraph text={ `Curated selection of insightful articles tagged with "${tag}".` } />
        </hgroup>

        <Masonry>
          { articles.nodes.map((article) => <Article key={ article.id } article={ article } />) }
        </Masonry>
      </main>
      <Footer
        id="footer"
      />
    </View>
  );
};

export {
  Tag as default,
  generateMetadata
};