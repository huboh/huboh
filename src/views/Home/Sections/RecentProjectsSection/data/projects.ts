import { ProjectProps } from "../../../../../components/Project/types";

// @ts-ignore
import NotewayImageSrc from "../../../../../assets/image/projects/noteway.png";
// @ts-ignore
import GoPackageImageSrc from "../../../../../assets/image/projects/go-package.png";
// @ts-ignore
import AoraImageSrc from "../../../../../assets/image/projects/aora.png";


const projectDetails: ProjectProps[] = [
  {
    title: "A Collaborative Note-Taking Platform",
    stackList: ["TypeScript", "Apollo", "GraphQl", "MongoDB"],
    imageSrc: NotewayImageSrc,
    imageAltText: "noteway web app",
    githubLink: "https://www.github.com/huboh/noteway-server",
    externalLink: "https://www.github.com/huboh/noteway-server",
    description: "A web app that i call \"a mesh of Google Keep & Google Docs\", it's a collaborative note-taking tool for either individuals or teams to sync notes or tasks across multiple devices, share ideas, work on projects & lots more. (beta release would be out soon).",
  },
  {
    title: "Golang Data Marshaler",
    stackList: ["Go"],
    imageSrc: GoPackageImageSrc,
    imageAltText: "golang utility package",
    externalLink: "https://www.github.com/huboh/",
    githubLink: "https://www.github.com/huboh/",
    description: "A light weight utility package that uses reflection under the hood for its implementation. it adds the missing functionality in Go for mapping parsed csv data to the fields in a struct & vice versa",
  },
  {
    title: "Aora",
    imageSrc: AoraImageSrc,
    stackList: ["TypeScript", "NodeJs", "MongoDb", "Heroku"],
    imageAltText: "aora ecommerce web application",
    externalLink: "https://www.aora.com/",
    githubLink: "https://www.github.com/huboh/ayegs",
    description: "A b2c ecommerce web app for sneakers, clothing accessories & more. built with basic functionalities like tracking/syncing user cart on multiple devices, get personalized recommendation on products e.t.c.",
  },
];

export {
  projectDetails as default
};