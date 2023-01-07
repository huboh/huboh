import { FC } from "react";
import styles from "../../styles/colored-text.module.scss";

export interface ColoredTextProps {
  text?: string;
}

const ColoredText: FC<ColoredTextProps> = (props) => {
  const className = styles.colored_text;

  return (
    props.text ? <span className={ className }>{ props.text }</span> : null
  );
};

export {
  ColoredText as default
};