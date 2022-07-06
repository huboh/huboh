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

export const Skills = [
  "javaScript", "typeScript", "React", "NodeJs", "Go", "Docker"
];