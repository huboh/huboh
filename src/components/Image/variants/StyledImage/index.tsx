import "../../styles/image.scss";

import { FC } from "react";
import { ImageProps } from "../../types";
import { joinClassStrings } from "../../../../utils";

// components
import Image from "../Image";


const StyledImage: FC<ImageProps> = ({ className, ...props }) => {
  const classString = joinClassStrings(className || "");

  return (
    <Image { ...props } className={ `styled-image ${classString}`.trim() } />
  );
};


export {
  StyledImage as default
};