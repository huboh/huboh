import { FC } from "react";
import { ARTICLES } from "../../../constants/routes";
import { ArticleProps } from "./types";
import { useClassString } from "../../../hooks";
import { default as readTime } from "reading-time";

// styles
import styles from "./styles/article.module.scss";

// components
import Link from "next/link";
import Text from "../../Text";
import Image from "../../Image";

const Article: FC<ArticleProps> = (props) => {
  const article = props.article;
  const cvrImage = article.coverImage;
  const className = useClassString(styles["article"], props.className);

  return (
    <article title={ article.title }>
      <Link href={ `${ARTICLES}/${article.id}` } className={ className }>
        { cvrImage.src && (
          <div className={ styles["image-wrapper"] }>
            <Image
              alt={ cvrImage.alt }
              src={ cvrImage.src }
              width={ cvrImage.width }
              height={ cvrImage.height }
              loading={ "lazy" }
              placeholder={ "empty" }
              className={ styles["image"] }
            />
          </div>
        ) }
        <div className={ styles["text-wrapper"] }>
          <span className={ styles["time-wrapper"] }>
            <time
              className={ styles['published-date'] }
              dateTime={ new Date(article.publishedAt).toJSON() }
              children={ new Date(article.publishedAt).toDateString() }
            />
            &nbsp;&nbsp;•&nbsp;&nbsp;
            <span
              children={ readTime(article.rawContent).text }
            />
          </span>
          <Text.Header.H1
            size={ "extra-small" }
            children={ article.title }
            className={ styles["title"] }
          />
          <Text.Paragraph
            size={ "extra-small" }
            children={ article.previewText.substring(0, 400) }
            className={ styles["preview-text"] }
          />
        </div>
      </Link>
    </article>
  );
};

export {
  Article as default
};