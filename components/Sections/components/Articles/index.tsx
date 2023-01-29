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
import Button from "../../../Button";
import Section from "../../../Section";
import Article from "../../../Cards/Article";

const Articles: FC<ArticlesProps> = (props) => {
  const id = "articles";
  const className = styles["articles"];
  const listType = useMediaQuery("(max-width: 760px)") ? "vertical" : "horizontal";

  return (
    <Section id={ id } className={ className }>
      <Text.Header.H2
        text={ "recent " }
        coloredText={ "articles" }
        className={ styles["heading"] }
      />
      <List
        key_={ "id" }
        type={ listType }
        items={ props.articles.slice(0, 3) }
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

export {
  Articles as default
};