import { FC } from "react";
import { Article } from "../../types";

import Text from "../../../../Text";
import styles from "../../styles/article.module.scss";

interface ArticleDescProps {
  article: Article;
}

const ArticleDesc: FC<ArticleDescProps> = ({ article }) => {
  return (
    <div className={ styles["text-wrapper"] }>
      <span
        className={ styles['published-date'] }
        children={ new Date(article.publishedAt).toDateString() }
      />

      <Text.Header.H1
        size={ "extra-small" }
        title={ article.title }
        children={ article.title }
        className={ styles["title"] }
      />

      <Text.Paragraph
        size={ "extra-small" }
        className={ styles["preview-text"] }
        children={ article.previewText.substring(0, 400) }
      />
    </div>
  );
};

export {
  ArticleDesc as default
};