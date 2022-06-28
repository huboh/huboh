import "./h1.scss";
import "../../styles/header.scss";

import { FC } from "react";
import { HeaderProps } from "../../types";
import { joinClassStrings } from "../../../../../../utils";

// components
import FullStop from "../../components/FullStop";
import ColoredSpan from "../../components/ColoredSpan";


const Header: FC<HeaderProps> = ({ children, text, id, ...props }) => {
  const sizeAttr = props.size || "";
  const colorAttr = props.color || "";
  const classNameAttr = props.className || "";
  const classString = joinClassStrings(sizeAttr, colorAttr, classNameAttr);

  return (
    <h1 className={ `text-header h1 ${classString}`.trim() } id={ id }>
      <span>{ text || children }</span>
      <ColoredSpan text={ props.coloredText } />
      <FullStop showFullStop={ props.showFullStop } />
    </h1>
  );
};


export {
  Header as default
};