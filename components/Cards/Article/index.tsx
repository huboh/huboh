import { FC } from "react";
import { ArticleProps } from "./types";
import { useClassString } from "../../../hooks";

// styles
import styles from "./styles/article.module.scss";

// components
import ArticleImg from "./components/ArticleImg";
import ArticleDesc from "./components/ArticleDesc";

const Article: FC<ArticleProps> = (props) => {
  const article = props.article;
  const className = useClassString(styles["article"], props.className);

  return (
    <div className={ className }>
      <ArticleImg article={ article } />
      <ArticleDesc article={ article } />
    </div>
  );
};

export {
  Article as default
};