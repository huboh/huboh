import { FC } from "react";

export interface ColoredSpanProps {
  text?: string;
}

const ColoredSpan: FC<ColoredSpanProps> = (props) => (
  props.text ? <span children={ props.text } className={ "colored-text" } /> : null
);

export {
  ColoredSpan as default
};