import { FC } from "react";
import { ProjectImageProps } from "../../types";

import Image from "../../../Image";


const ProjectImage: FC<ProjectImageProps> = ({ imageSrc, imageAltText, externalLink }) => (
  <a target="_blank" rel="noreferrer" href={ externalLink || "" } className="project-image-wrapper">
    <Image imageSrc={ imageSrc } altText={ imageAltText } className="project-image" />
  </a>
);


export {
  ProjectImage as default
};