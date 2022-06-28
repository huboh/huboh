import { FC } from "react";
import { Link } from "react-router-dom";
import { ProjectDescriptionProps } from "../../types";

import Text from "../../../Text";
import ProjectIcons from "../ProjectIcons";
import ProjectStack from "../ProjectStack";


const ProjectDescription: FC<ProjectDescriptionProps> = ({ title, description, stackList, ...iconLinks }) => {
  const titleLinkText = (
    <Link to={ iconLinks.externalLink || "" } children={ title } />
  );

  return (
    <div className="project-details-wrapper">
      <Text.Header size="extra-small" className="project-title" children={ titleLinkText } showFullStop={ false } />
      <Text.Paragraph size="small" className="project-description" text={ description } />
      <ProjectStack stackList={ stackList } />
      <ProjectIcons  { ...iconLinks } />
    </div>
  );
};


export {
  ProjectDescription as default
};