import { FC } from "react";

export interface ColoredSpanProps {
  text?: string;
}

const ColoredSpan: FC<ColoredSpanProps> = (props) => (
  props.text ? <span className="colored-text">{ props.text }</span> : null
);

export {
  ColoredSpan as default
};