import "./h1.scss";
import "../../styles/header.scss";

import { FC } from "react";
import { HeaderProps } from "../../types";
import { joinClassStrings } from "../../../../../../utils";

// components
import ColoredText from "../../../ColoredText";


const Header: FC<HeaderProps> = ({ children, text, id, ...props }) => {
  const sizeAttr = props.size || "";
  const colorAttr = props.color || "";
  const classNameAttr = props.className || "";
  const classString = joinClassStrings(sizeAttr, colorAttr, classNameAttr);

  return (
    <h1 className={ `text-header h1 ${classString}`.trim() } id={ id }>
      <span>{ text || children }</span>
      <ColoredText text={ props.coloredText } />
      <span className="semi-colon"></span>
    </h1>
  );
};


export {
  Header as default
};