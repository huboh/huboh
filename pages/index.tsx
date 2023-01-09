import { join } from "path";
import { PageProps } from "../types";
import { readdir, readFile } from "fs/promises";
import { NextPage, GetStaticProps } from "next";

// hooks

// components
import Seo from "../components/Seo";
import View from "../components/View";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sections from "../components/Sections";

export interface IndexPageProps extends PageProps { }

const cwd = process.cwd();
const articlesDirectory = join(cwd, "articles");

const getStaticProps: GetStaticProps = async (context) => {
  const articlesPath = await readdir(articlesDirectory);
  const articleContents = await Promise.all(articlesPath.map(
    (article) => readFile(join(articlesDirectory, article), { encoding: "utf-8" })
  ));

  // grab projects, articles, github stats

  return {
    props: {
      fileNames: articlesPath,
      fileContents: articleContents,
    }
  };
};

const IndexPage: NextPage<IndexPageProps> = (props) => {
  return (
    <View className={ props.className }>
      <Seo
        title="Knowledge Musa - Software Engineer"
        description="personal portfolio website for musa knowledge"
      />
      <Header />
      <Sections />
      <Footer />
    </View>
  );
};

export {
  getStaticProps,
  IndexPage as default
};