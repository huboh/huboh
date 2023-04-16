import { useRouter } from "next/router";
import { NextPage, GetStaticPaths } from "next";

import { PageProps } from "../../types";
import { getArticles } from "../../lib/articles";
import { useClassString } from "../../hooks";

// styles
import styles from "../../styles/pages/tag.module.scss";

// components
import Seo from "../../components/Seo";
import View from "../../components/View";
import Text from "../../components/Text";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Article from "../../components/Cards/Article";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface TagPageProps extends PageProps, Omit<Awaited<ReturnType<typeof getStaticProps>>["props"], ""> { }

const getStaticProps = async (context: any) => {
  return {
    props: {
      tag: context.params.slug,
      articles: await getArticles({ tag: context.params.slug })
    }
  };
};

const getStaticPaths: GetStaticPaths = async () => {
  const tags = new Set<string>();
  const articles = (await getArticles({})).nodes;
  const addTagsToList = (tags_: typeof tags, article: (typeof articles)[number]) => (article.tags.forEach((tag) => tags_.add(tag)), tags_);

  return {
    fallback: false,
    paths: (
      Array
        .from(articles.reduce(addTagsToList, tags))
        .map((path) => ({ params: { slug: path } }))
    )
  };
};

const Tag: NextPage<TagPageProps> = (props) => {
  const router = useRouter();
  const canonical = process.env.NEXT_PUBLIC_DOMAIN + router.asPath;
  const className = useClassString(styles["tag"], props.className);

  return (
    <View className={ className }>
      <Seo
        title={ `Articles tagged with ${props.tag}` }
        canonical={ canonical }
      />
      <Header
        id="header"
      />
      <main className={ styles["main"] }>
        <hgroup>
          <Text.Header.H1 text={ props.tag } />
          <Text.Paragraph text={ `Curated selection of insightful articles tagged with "${props.tag}".` } />
        </hgroup>
        <ResponsiveMasonry columnsCountBreakPoints={ { 0: 1, 350: 1, 760: 2, 1024: 3 } }>
          <Masonry className={ styles["list"] }>
            { props.articles.nodes.map((article) => <Article key={ article.id } article={ article } />) }
          </Masonry>
        </ResponsiveMasonry>
      </main>
      <Footer
        id="footer"
      />
    </View>
  );
};

export {
  Tag as default,
  getStaticProps,
  getStaticPaths
};