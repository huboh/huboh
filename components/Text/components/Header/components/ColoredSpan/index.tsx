import { FC } from "react";
import styles from "../../../../styles/colored-text.module.scss";

export interface ColoredSpanProps {
  text?: string;
}

const ColoredSpan: FC<ColoredSpanProps> = (props) => (
  props.text ? <span children={ props.text } className={ styles["colored-text"] } /> : null
);

export {
  ColoredSpan as default
};