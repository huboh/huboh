import { FC, ReactNode } from "react";
import { joinClassStrings } from "../../utils";

export interface ViewProps {
  children?: ReactNode;
  className?: string;
  id?: string;
}


const View: FC<ViewProps> = ({ children, className, id }) => {
  const classString = joinClassStrings("view", (className || ""));

  return (
    <section className={ classString } id={ id }>
      { children }
    </section>
  );
};


export {
  View as default
};