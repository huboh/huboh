import h2Styles from "../../styles/h2.module.scss";
import headerStyles from "../../styles/header.module.scss";

import { FC } from "react";
import { HeaderProps } from "../../types";
import { useClassString } from "../../../../../../hooks";

// components
import FullStop from "../../components/FullStop";
import ColoredSpan from "../../components/ColoredSpan";

const H2: FC<HeaderProps> = ({ id, text, size, color, className, coloredText, showFullStop, children, ...props }) => {
  const txt = text || children;
  const sizeAttr = h2Styles[size || ""];
  const colorAttr = headerStyles[color || ""];
  const className_ = useClassString(headerStyles["text-header"], h2Styles["h2"], sizeAttr, colorAttr, className);

  return (
    <h2 { ...props } className={ className_ } id={ id }>
      <span children={ typeof txt === "string" ? txt.replace((txt.split(/\s/).pop() || ""), " ") : txt } />
      <ColoredSpan text={ coloredText } />
      <FullStop text={ txt } showFullStop={ showFullStop } />
    </h2>
  );
};

export {
  H2 as default
};