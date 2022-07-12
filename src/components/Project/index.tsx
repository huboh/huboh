import "./styles/project.scss";

import { FC } from "react";
import { ProjectProps } from "./types";
import { joinClassStrings } from "../../utils";

import ProjectImage from "./components/ProjectImage";
import ProjectDescription from "./components/ProjectDescription";


const Project: FC<ProjectProps> = (props) => {
  const className = props.className || "";
  const classString = joinClassStrings(className);

  return (
    <div className={ `project-wrapper ${classString}`.trim() }>
      <ProjectImage { ...props } />
      <ProjectDescription  { ...props } />
    </div>
  );
};


export {
  Project as default
};