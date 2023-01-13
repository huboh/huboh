import { FC } from "react";
import { ProjectImageProps } from "../../types";

import Image from "../../../../Image";
import styles from "../../styles/project.module.scss";

const ProjectImage: FC<ProjectImageProps> = (props) => {
  const src = props.project.image.src;
  const alt = props.project.image.alt;
  const className = styles["project-image-wrapper"];

  return (
    <a target="_blank" rel="noreferrer" href={ props.project.links.external } className={ className }>
      <Image
        src={ src }
        alt={ alt }
        width={ 1000 }
        height={ 1000 }
        loading={ "lazy" }
        placeholder={ "empty" }
        className={ styles["project-image"] }
      />
    </a>
  );
};

export {
  ProjectImage as default
};