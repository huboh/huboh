import { ProjectProps } from "../../../../../components/Project/types";

// @ts-ignore
import NotewayImageSrc from "../../../../../assets/image/projects/noteway.png";
// @ts-ignore
import GoPackageImageSrc from "../../../../../assets/image/projects/go-package.png";
// @ts-ignore
import AoraImageSrc from "../../../../../assets/image/projects/aora.png";


const projectDetails: ProjectProps[] = [
  {
    title: "Noteway",
    stackList: ["TypeScript", "Apollo", "GraphQl", "MongoDB", "Redis", "Docker", "etc."],
    imageSrc: NotewayImageSrc,
    imageAltText: "noteway web app",
    githubLink: "https://www.github.com/huboh/noteway-server",
    externalLink: "https://www.github.com/huboh/noteway-server",
    description: "Noteway is a collaborative note-taking/article-writing web app, i like to think of it as \"a mesh of Google Keep & Google Docs\" with a nice UI of course. individuals or teams can sync, organize & retrieve notes or tasks across multiple devices, share ideas & lots more. (in development).",
  },
  {
    title: "Records: Golang CSV Data Marshaler",
    stackList: ["Go"],
    imageSrc: GoPackageImageSrc,
    imageAltText: "records: golang csv data marshaler",
    externalLink: "https://www.github.com/huboh/records/",
    githubLink: "https://www.github.com/huboh/records/",
    description: "A light weight & blazingly fast😁 Go package that uses reflection under the hood to marshal & unmarshal CSV records(slice of slice of strings) to/from CSV entries(slice of structs).",
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