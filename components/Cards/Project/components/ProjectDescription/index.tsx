import { FC } from "react";
import { ProjectDescriptionProps } from "../../types";

// styles
import styles from "../../styles/project.module.scss";

// components
import Text from "../../../../Text";
import ProjectIcons from "../ProjectIcons";
import ProjectStack from "../TechStack";

const ProjectDescription: FC<ProjectDescriptionProps> = (props) => {
  const project = props.project;
  const className = styles["project-details-wrapper"];
  const headerText = <a href={ project.links.external } children={ project.title } target={ "_blank" } rel={ "noreferrer" } />;

  return (
    <div className={ className }>
      <Text.Header
        size={ "extra-small" }
        children={ headerText }
        className={ styles["project-title"] }
        showFullStop={ false }
      />

      <Text.Paragraph
        size={ "small" }
        text={ project.description }
        className={ styles["project-description"] }
      />

      <ProjectStack
        techStacks={ project.techStacks }
      />

      <ProjectIcons
        projectLinks={ project.links }
      />
    </div >
  );
};

export {
  ProjectDescription as default
};