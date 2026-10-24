import { FC } from "react";
import { ProjectSectionProps } from "./types";

// styles
import styles from "./projects.module.scss";

// components
import H2 from "../../../Text/components/Header/variants/h2";
import List from "../../../List";
import Section from "../../../Section";
import Project from "../../../Cards/Project";

const Projects: FC<ProjectSectionProps> = (props) => {
  const id = "projects";
  const className = styles["recent-projects-section"];

  return (
    <Section id={ id } className={ className }>
      <H2
        text="some of my recent "
        coloredText="projects"
      />
      <List
        key_={ "title" }
        type={ "vertical" }
        items={ props.projects }
        className={ styles["projects"] }
        render={ (project) => <Project project={ project } /> }
      />
    </Section>
  );
};

export {
  Projects as default
};