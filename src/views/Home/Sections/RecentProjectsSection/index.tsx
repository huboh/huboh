import { FC } from "react";
import Section from "../../../../components/Section";

export interface RecentProjectsSectionProps { }


const RecentProjectsSection: FC<RecentProjectsSectionProps> = () => (
  <Section id="recent-project">
    recent projects section
  </Section>
);


export {
  RecentProjectsSection as default
};