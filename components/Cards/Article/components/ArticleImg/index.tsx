import { FC } from "react";
import { Article } from "../../types";
import { ARTICLES } from "../../../../../constants/routes";

import Link from "next/link";
import Image from "../../../../Image";
import styles from "../../styles/article.module.scss";

interface ArticleDescProps {
  article: Article;
}

const ArticleImg: FC<ArticleDescProps> = (props) => {
  const { article } = props;
  const { alt, src } = article.coverImage;

  return (
    <Link href={ `${ARTICLES}/${article.id}` } className={ styles["image-wrapper"] }>
      <Image alt={ alt } src={ src } width={ 1000 } height={ 1000 } loading={ "lazy" } placeholder={ "empty" } className={ styles["image"] } />
    </Link>
  );
};

export {
  ArticleImg as default
};