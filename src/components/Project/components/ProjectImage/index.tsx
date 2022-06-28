import { FC } from "react";
import { Link } from "react-router-dom";
import { ProjectImageProps } from "../../types";

import Image from "../../../Image";


const ProjectImage: FC<ProjectImageProps> = ({ imageSrc, imageAltText, externalLink }) => (
  <Link target="_blank" to={ externalLink || "" } className="project-image-wrapper">
    <Image imageSrc={ imageSrc } altText={ imageAltText } className="project-image" />
  </Link>
);


export {
  ProjectImage as default
};