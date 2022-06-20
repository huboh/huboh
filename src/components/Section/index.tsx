import { FC, ReactNode } from "react";

export interface SectionProps {
  children?: ReactNode;
  className?: string;
  id?: string;
}


const Section: FC<SectionProps> = ({ children, className, id }) => (
  <section className={ "section" + (className || "") } id={ id }>
    { children }
  </section>
);


export {
  Section as default
};