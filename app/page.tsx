// types
import type { Page } from "../types";
import type { Metadata } from "next";

// utils
import { getProjects } from "../lib/projects";
import { getArticles } from "../lib/articles";

// styles
import styles from "../styles/pages/index.module.scss";

// components
import View from "../components/View";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sections from "../components/Sections";

const metadata: Metadata = {
  title: "Software Engineer - Knowledge Musa",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_DOMAIN
  },
  openGraph: {
    title: "Software Engineer - Knowledge Musa",
  },
  robots: {
    index: true,
    follow: true
  }
};

const IndexPage: Page = async (props) => {
  const [projects, articles] = await Promise.all([
    getProjects({}),
    getArticles({ count: 3, featured: true, previewMode: true }),
  ]);


  return (
    <View className={ props.className }>
      <Header
        id="header"
        className={ styles["header"] }
      />
      <Sections
        articles={ articles.nodes }
        projects={ projects.nodes }
      />
      <Footer
        id="footer"
      />
    </View>
  );
};

export {
  IndexPage as default,
  metadata,
};
