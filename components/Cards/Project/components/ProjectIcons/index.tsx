import { FC } from "react";
import { Project } from "../../../../../types";
import { TbExternalLink, TbBrandGithub } from "react-icons/tb";

import Button from "../../../../Button";
import styles from "../../styles/project.module.scss";

export interface ProjectIconsProps {
  projectLinks: Project['links'];
}

const ProjectIcons: FC<ProjectIconsProps> = (props) => {
  const links = props.projectLinks;
  const className = styles["project-icon"];

  return (
    <div className={ styles["project-icons-wrapper"] }>
      { links.github && <Button.ExternalIconLink className={ className } to={ links.github } icon={ <TbBrandGithub /> } /> }
      { links.external && <Button.ExternalIconLink className={ className } to={ links.external } icon={ <TbExternalLink /> } /> }
    </div>
  );
};

export {
  ProjectIcons as default
};