export interface ProjectProps {
  className?: string;

  imageSrc: string;
  imageAltText: string;

  title: string;
  description: string;
  stackList?: string[];

  githubLink?: string;
  externalLink?: string;
}

export interface ProjectIconsProps extends Pick<ProjectProps, "githubLink" | "externalLink"> { }

export interface ProjectImageProps extends Pick<ProjectProps, "imageSrc" | "imageAltText" | "externalLink"> { }

export interface ProjectStackProps extends Pick<ProjectProps, "stackList"> { }

export interface ProjectDescriptionProps extends Pick<ProjectProps, "description" | "title" | "stackList" | "githubLink" | "externalLink"> { }