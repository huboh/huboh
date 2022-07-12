import { ImageProps } from "./types";

import Img from "./variants/Image";
import StyledImage from "./variants/StyledImage";


export default function Image(props: ImageProps) {
  return <Img { ...props } />;
}


Image.Default = Img;
Image.Styled = StyledImage;