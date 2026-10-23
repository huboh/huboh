"use client";

import { FC } from "react";
import { ARTICLES } from "../../../../constants/routes";
import { ArticlesProps } from "./types";

// styles
import styles from "./articles.module.scss";

// hooks
import useMediaQuery from "../../../../hooks/useMediaQuery";

// components
import Text from "../../../Text";
import List from "../../../List";
import Section from "../../../Section";
import Article from "../../../Cards/Article";
import ButtonLink from "../../../Button/variants/ButtonLink";

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
      <ButtonLink
        href={ ARTICLES }
        text={ "view more" }
      />
    </Section>
  );
};

export default Articles;