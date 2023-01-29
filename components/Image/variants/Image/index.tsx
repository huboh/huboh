import { FC } from "react";
import { default as NextImage, ImageProps as NextImageProps } from "next/image";

// hooks
import { useClassString } from "../../../../hooks";

// styles
import styles from "../../styles/image.module.scss";

export interface ImageProps extends NextImageProps {
  roundedBorder?: boolean;
}

const Image: FC<ImageProps> = (props) => {
  const border = props.roundedBorder ? "round-border" : "";
  const className = useClassString(styles["image"], styles[border || "round-border"], props.className);

  return (
    <NextImage
      { ...props }
      className={ className }
      placeholder={ props.placeholder || "blur" }
    />
  );
};

export {
  Image as default
};