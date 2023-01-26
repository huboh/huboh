import h1Styles from "../../styles/h1.module.scss";
import headerStyles from "../../styles/header.module.scss";

import { FC } from "react";
import { HeaderProps } from "../../types";
import { useClassString } from "../../../../../../hooks";

// components
import FullStop from "../../components/FullStop";
import ColoredSpan from "../../components/ColoredSpan";

const H1: FC<HeaderProps> = ({ id, text, size, color, className, coloredText, showFullStop, children, ...props }) => {
  const sizeAttr = h1Styles[size || ""];
  const colorAttr = headerStyles[color || ""];
  const className_ = useClassString(headerStyles.text_header, h1Styles.h1, sizeAttr, colorAttr, className);

  return (
    <h1 { ...props } className={ className_ } id={ id }>
      <span children={ text || children } />
      <ColoredSpan text={ coloredText } />
      <FullStop showFullStop={ showFullStop } />
    </h1>
  );
};

export {
  H1 as default
};