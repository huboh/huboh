import { FC, ReactNode } from "react";

export interface ViewProps {
  children?: ReactNode;
  className?: string;
  id?: string;
}


const View: FC<ViewProps> = ({ children, className, id }) => (
  <section className={ "view" + (className || "") } id={ id }>
    { children }
  </section>
);


export {
  View as default
};