import "./section.scss";

import { FC, ReactNode } from "react";
import { joinClassStrings } from "../../utils";

export type TextAlign = "left" | "center" | "right";

export interface SectionProps {
  textAlignment?: TextAlign;
  children?: ReactNode;
  className?: string;
  id?: string;
}


const Section: FC<SectionProps> = ({ children, id, ...props }) => {
  const className = props.className || "";
  const textAlignment = props.textAlignment || "";
  const classString = joinClassStrings(textAlignment, className);

  return (
    <section className={ `section ${classString}`.trim() } id={ id } children={ children } />
  );
};


export {
  Section as default
};