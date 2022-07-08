import { Preferences } from "../providers/PreferencesProvider/types";


export const ResumeFileName = "resume";
export const ResumeDownloadLink = "/resume.pdf";

export const defaultListBulletIcon = "⚡";

export const PreferencesKey = "preferences";

export const DefaultTheme: Preferences['theme'] = "dark";

export const Themes: Preferences['theme'][] = ["light", "dark", "system"];

export const NavigationLinks = [
  { label: "about", link: "#about" },
  { label: "projects", link: "#projects" },
  { label: "contact", link: "#contact" },
];

export const SocialLinks = {
  github: "https://www.github.com/huboh",
  twitter: "https://www.twitter.com/from_Godfather",
  linkedIn: "https://www.linkedin.com/in/knowledge-musa-4aa980231",
};

export const Skills = [
  "javaScript", "typeScript", "React", "NodeJs", "Go", "Docker"
];