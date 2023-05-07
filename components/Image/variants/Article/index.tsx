import { FC } from "react";
import { default as Image, ImageProps } from "../../variants/Image";

// hooks
import { useClassString } from "../../../../hooks";

// styles
import styles from "../../styles/image.module.scss";

const Article: FC<ImageProps> = (props) => {
  const className = useClassString(styles["article-image"], props.className);

  return (
    <figure className={ styles["figure"] }>
      <Image
        { ...props }
        width={ props.width || 1000 }
        height={ props.width || 1000 }
        className={ className }
        placeholder={ props.placeholder || "empty" }
      />
      { !props.alt ? null : (
        <figcaption
          children={ props.alt }
          className={ styles["image-desc"] }
        />
      ) }
    </figure>
  );
};

export {
  Article as default
};