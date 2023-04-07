import { FC } from "react";
import { ARTICLES } from "../../../../constants/routes";
import { ArticlesProps } from "./types";
import { default as dynamic } from "next/dynamic";

// styles
import styles from "./articles.module.scss";

// hooks
import useMediaQuery from "../../../../hooks/useMediaQuery";

// components
import Text from "../../../Text";
import List from "../../../List";
import Button from "../../../Button";
import Section from "../../../Section";
import Article from "../../../Cards/Article";

const Articles: FC<ArticlesProps> = (props) => {
  const id = "articles";
  const listType = useMediaQuery("(max-width: 760px)") ? "vertical" : "horizontal";

  return (
    <Section id={ id } className={ styles["articles"] }>
      <Text.Header.H2
        text={ "featured " }
        coloredText={ "articles" }
        className={ styles["heading"] }
      />
      <List
        key_={ "id" }
        type={ listType }
        items={ props.articles }
        render={ (article) => <Article article={ article } /> }
        className={ styles["list"] }
      />
      <Button.Link
        href={ ARTICLES }
        text={ "view more" }
      />
    </Section>
  );
};

export default dynamic(
  () => Promise.resolve(Articles), { ssr: false }
);