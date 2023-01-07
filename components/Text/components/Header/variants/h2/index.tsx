import h2Styles from "../../styles/h2.module.scss";
import headerStyles from "../../styles/header.module.scss";

import { FC } from "react";
import { HeaderProps } from "../../types";
import { useClassString } from "../../../../../../hooks";

// components
import FullStop from "../../components/FullStop";
import ColoredSpan from "../../components/ColoredSpan";

const H2: FC<HeaderProps> = (props) => {
  const sizeAttr = h2Styles[props.size || ""];
  const colorAttr = headerStyles[props.color || ""];
  const className = useClassString(headerStyles.text_header, h2Styles.h2, sizeAttr, colorAttr, props.className);

  return (
    <h2 className={ className } id={ props.id }>
      <span children={ props.text || props.children } />
      <ColoredSpan text={ props.coloredText } />
      <FullStop showFullStop={ props.showFullStop } />
    </h2>
  );
};

export {
  H2 as default
};