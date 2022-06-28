import "./paragraph.scss";

import { Size } from "../../types";
import { FC, ReactNode } from "react";
import { joinClassStrings } from "../../../../utils";

export interface ParagraphProps {
  children?: ReactNode;
  className?: string;
  text?: string | ReactNode;
  size?: Size;
  id?: string;
}


const Paragraph: FC<ParagraphProps> = ({ children, text, id, ...props }) => {
  const size = props.size || "";
  const className = props.className || "";
  const classString = joinClassStrings(size, className);

  return (
    <p className={ `text-paragraph ${classString}` } id={ id } children={ text || children } />
  );
};


export {
  Paragraph as default
};