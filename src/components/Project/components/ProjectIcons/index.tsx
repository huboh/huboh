import { FC } from "react";
import { ProjectIconsProps } from "../../types";
import { TbExternalLink, TbBrandGithub } from "react-icons/tb";

// components
import Button from "../../../Button";


const ProjectIcons: FC<ProjectIconsProps> = ({ githubLink, externalLink }) => (
  <div className="project-icons-wrapper">
    { githubLink && <Button.IconLink className="project-icon" to={ githubLink } icon={ <TbBrandGithub /> } /> }
    { externalLink && <Button.IconLink className="project-icon" to={ externalLink } icon={ <TbExternalLink /> } /> }
  </div>
);


export {
  ProjectIcons as default
};