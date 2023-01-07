import h1Styles from "../../styles/h1.module.scss";
import headerStyles from "../../styles/header.module.scss";

import { FC } from "react";
import { HeaderProps } from "../../types";
import { useClassString } from "../../../../../../hooks";

// components
import FullStop from "../../components/FullStop";
import ColoredSpan from "../../components/ColoredSpan";

const H1: FC<HeaderProps> = (props) => {
  const sizeAttr = h1Styles[props.size || ""];
  const colorAttr = headerStyles[props.color || ""];
  const className = useClassString(headerStyles.text_header, h1Styles.h2, sizeAttr, colorAttr, props.className);

  return (
    <h1 className={ className } id={ props.id }>
      <span children={ props.text || props.children } />
      <ColoredSpan text={ props.coloredText } />
      <FullStop showFullStop={ props.showFullStop } />
    </h1>
  );
};

export {
  H1 as default
};