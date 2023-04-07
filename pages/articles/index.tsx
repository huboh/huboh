import { NextPage } from "next";
import { PageProps } from "../../types";
import { useRouter } from "next/router";
import { getArticles } from "../../lib/articles";
import { useClassString } from "../../hooks";
import { default as Masonry, ResponsiveMasonry } from "react-responsive-masonry";

// styles
import styles from "../../styles/pages/articles.module.scss";

// components
import Seo from "../../components/Seo";
import Text from "../../components/Text";
import View from "../../components/View";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Article from "../../components/Cards/Article";

interface ArticlesPageProps extends PageProps, Omit<Awaited<ReturnType<typeof getStaticProps>>["props"], ""> { }

const getStaticProps = async () => {
  return {
    props: {
      articles: await getArticles({})
    }
  };
};

const ArticlesPage: NextPage<ArticlesPageProps> = (props) => {
  const router = useRouter();
  const canonical = process.env.NEXT_PUBLIC_DOMAIN + router.asPath;
  const className = useClassString(styles["articles"], props.className);
  const pageDescription = "A collection of my written work. from in-depth tutorials to thought-provoking insights, these articles provide a glimpse into the projects I've worked on and the technologies I've mastered.";

  return (
    <View className={ className }>
      <Seo
        title={ "Articles" }
        canonical={ canonical }
        description={ pageDescription }
      />
      <Header
        id={ "header" }
      />
      <main className="main">
        <hgroup>
          <Text.Header.H1 text={ "articles" } />
          <Text.Paragraph text={ pageDescription } />
        </hgroup>
        <ResponsiveMasonry columnsCountBreakPoints={ { 0: 1, 350: 1, 760: 2, 1024: 3 } }>
          <Masonry className={ styles["list"] }>
            { props.articles.nodes.map((article) => <Article key={ article.id } article={ article } />) }
          </Masonry>
        </ResponsiveMasonry>
      </main>
      <Footer
        id={ "footer" }
      />
    </View>
  );
};

export {
  getStaticProps,
  ArticlesPage as default,
};