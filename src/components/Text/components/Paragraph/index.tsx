import "./paragraph.scss";

import { TextSize } from "../../types";
import { FC, ReactNode } from "react";
import { joinClassStrings } from "../../../../utils";

export interface ParagraphProps {
  children?: ReactNode;
  className?: string;
  text?: string | ReactNode;
  size?: TextSize;
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