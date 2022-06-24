import "./paragraph.scss";

import { FC, ReactNode } from "react";
import { joinClassStrings } from "../../../../utils";

export interface ParagraphProps {
  children?: ReactNode;
  className?: string;
  text?: string | ReactNode;
  id?: string;
}


const Paragraph: FC<ParagraphProps> = ({ children, text, className, id }) => {
  const classString = joinClassStrings(className || "");

  return (
    <p className={ "text-paragraph" + classString } id={ id } children={ text || children } />
  );
};


export {
  Paragraph as default
};