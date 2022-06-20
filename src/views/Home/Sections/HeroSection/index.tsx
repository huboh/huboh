import { FC } from "react";
import Section from "../../../../components/Section";

export interface HeroSectionProps { }


const HeroSection: FC<HeroSectionProps> = () => (
  <Section id="hero">
    hero section
  </Section>
);


export {
  HeroSection as default
};