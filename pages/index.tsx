import { join } from "path";
import { NextPage } from "next";
import { PageProps } from "../types";

import { getProjects } from "../lib/projects";
import { getArticles } from "../lib/articles";

// hooks
import { useRouter } from "next/router";

// styles
import styles from "../styles/pages/index.module.scss";

// components
import Seo from "../components/Seo";
import View from "../components/View";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sections from "../components/Sections";

interface IndexPageProps extends PageProps, Omit<Awaited<ReturnType<typeof getStaticProps>>["props"], ""> { }

const getStaticProps = async () => {
  const cwd = process.cwd();
  const [projects, articles] = await Promise.all([
    getProjects({ directory: join(cwd, "data", "projects") }), getArticles({ directory: join(cwd, "data", "articles") }),
  ]);

  return {
    props: {
      projects,
      articles
    }
  };
};

const IndexPage: NextPage<IndexPageProps> = (props) => {
  const router = useRouter();
  const canonical = process.env.NEXT_PUBLIC_DOMAIN + router.asPath;

  return (
    <View className={ props.className }>
      <Seo
        title="Knowledge Musa"
        canonical={ canonical }
        siteName="Software Engineer"
      />
      <Header
        id="header"
        className={ styles["header"] }
      />
      <Sections
        articles={ props.articles.nodes }
        projects={ props.projects.nodes }
      />
      <Footer
        id="footer"
      />
    </View>
  );
};

export {
  getStaticProps,
  IndexPage as default
};