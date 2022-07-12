import "./colored-text.scss";

import { FC } from "react";

export interface ColoredTextProps {
  text?: string;
}

const ColoredText: FC<ColoredTextProps> = (props) => (
  props.text ? <span className="colored-text">{ props.text }</span> : null
);

export {
  ColoredText as default
};