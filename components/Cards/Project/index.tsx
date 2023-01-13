import { FC } from "react";
import { ProjectProps } from "./types";
import { useClassString } from "../../../hooks";

// styles
import styles from "./styles/project.module.scss";

// components
import ProjectImage from "./components/ProjectImage";
import ProjectDescription from "./components/ProjectDescription";

const Project: FC<ProjectProps> = (props) => {
  const className = useClassString(styles["project-wrapper"], props.className);

  return (
    <div className={ className }>
      <ProjectImage project={ props.project } />
      <ProjectDescription project={ props.project } />
    </div>
  );
};

export {
  Project as default
};