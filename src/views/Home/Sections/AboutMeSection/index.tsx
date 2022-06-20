import { FC } from "react";
import Section from "../../../../components/Section";

export interface AboutMeSectionProps { }


const AboutMeSection: FC<AboutMeSectionProps> = () => (
  <Section id="about-me">
    about me section
  </Section>
);


export {
  AboutMeSection as default
};