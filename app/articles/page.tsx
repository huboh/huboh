// types
import type { Page } from "../../types";
import type { Metadata } from "next";

// styles
import styles from "../../styles/pages/articles.module.scss";

// utils
import { getArticles } from "../../lib/articles";
import { joinClassStrings } from "../../lib";

// components
import Text from "../../components/Text";
import View from "../../components/View";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Article from "../../components/Cards/Article";
import Masonry from "./page.masonry";

const pgDesc = "A collection of my written work. from in-depth tutorials to thought-provoking insights, these articles provide a glimpse into the projects I've worked on and the technologies I've mastered.";

const metadata: Metadata = {
  title: "Articles",
  description: pgDesc,
  openGraph: {
    title: "Articles",
  }
};

const ArticlesPage: Page = async (props) => {
  const articles = await getArticles({ previewMode: true });
  const className = joinClassStrings(styles["articles"], props.className);

  return (
    <View className={ className }>
      <Header
        id={ "header" }
      />

      <main className="main">
        <hgroup>
          <Text.Header.H1 text={ "articles" } />
          <Text.Paragraph text={ pgDesc } />
        </hgroup>
        <Masonry>
          { articles.nodes.map((article) => <Article key={ article.id } article={ article } />) }
        </Masonry>
      </main>

      <Footer
        id={ "footer" }
      />
    </View>
  );
};

export {
  ArticlesPage as default,
  metadata
};