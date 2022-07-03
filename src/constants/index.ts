import { Preferences } from "../providers/PreferencesProvider/types";


export const ResumeFileName = "resume";
export const ResumeDownloadLink = "/resume.pdf";

export const defaultListBulletIcon = "⚡";

export const preferencesKey = "preferences";

export const themes: Preferences['theme'][] = ["light", "dark", "system"];

export const NavigationLinks = [
  { label: "about", link: "#about" },
  { label: "recent projects", link: "#recent-project" },
  { label: "contact", link: "#contact" },
];