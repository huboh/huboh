import "./recent-project-section.scss";

import { FC } from "react";
import project from "./data/projects";

import Text from "../../../../components/Text";
import Section from "../../../../components/Section";
import Project from "../../../../components/Project";


const RecentProjectsSection: FC = () => (
  <Section id="projects" className="recent-projects-section" textAlignment="center">
    <div className="section-wrapper">
      <Text.Header.H2 className="section-header" text="some of my " coloredText="recent projects" />

      <div className="projects-wrapper">
        { project.map(project => <Project key={ project.title } { ...project } />) }
      </div>
    </div>
  </Section>
);


export {
  RecentProjectsSection as default
};