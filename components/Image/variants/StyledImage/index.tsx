import { FC } from "react";
import { default as Image, ImageProps } from "../../variants/Image";

// hooks
import { useClassString } from "../../../../hooks";

// styles
import styles from "../../styles/image.module.scss";

const StyledImage: FC<ImageProps> = (props) => {
  const className = useClassString(styles["styled-image"], props.className);

  return (
    <Image
      { ...props }
      className={ className }
    />
  );
};

export {
  StyledImage as default
};