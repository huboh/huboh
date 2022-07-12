import "../../styles/image.scss";

import { FC } from "react";
import { ImageProps } from "../../types";
import { joinClassStrings } from "../../../../utils";


const Image: FC<ImageProps> = ({ imageSrc, altText, ...props }) => {
  const className = props.className || "";
  const roundedBorder = props.roundedBorder ? "round-border" : "";
  const classString = joinClassStrings(roundedBorder, className);

  return (
    <img src={ imageSrc } alt={ altText } className={ `image ${classString}`.trim() } />
  );
};


export {
  Image as default
};