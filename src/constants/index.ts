import { Preferences } from "../providers/PreferencesProvider/types";

export const defaultListBulletIcon = "⚡";

export const PreferencesKey = "preferences";

export const DefaultTheme: Preferences['theme'] = "dark";

export const DefaultColorScheme: Preferences['colorScheme'] = "blue";

export const Themes: Preferences['theme'][] = ["light", "dark", "system"];

export const ColorSchemes: Preferences['colorScheme'][] = ["red", "orange", "yellow", "green", "blue", "pink", "gold"];

export const Resume = {
  fileName: "knowledge musa resume",
  path: "https://drive.google.com/file/d/1YiuAUY3NEL5e0590TwT1m9TKLl0uiWqc/view?usp=share_link",
};

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
  "javaScript", "typeScript", "React & Nextjs", "NodeJs", "Go", "Docker"
];
