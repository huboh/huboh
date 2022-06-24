import "./h2.scss";
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
    <h2 className={ `text-header h2 ${classString}`.trim() } id={ id }>
      <span>{ text || children }</span>
      <ColoredText text={ props.coloredText } />
      <span className="semi-colon"></span>
    </h2>
  );
};


export {
  Header as default
};