import { Preferences } from "../providers/PreferencesProvider/types";
import { TbBrandGithub, TbBrandTwitter, TbBrandLinkedin } from "react-icons/tb";

export const defaultListBulletIcon = "⚡";

export const PreferencesKey = "preferences";

export const DefaultTheme: Preferences['theme'] = "dark";

export const DefaultColorScheme: Preferences['colorScheme'] = "blue";

export const Themes: Preferences['theme'][] = ["light", "dark", "system"];

export const ColorSchemes: Preferences['colorScheme'][] = ["red", "orange", "yellow", "green", "blue", "pink", "gold"];

export const Resume = {
  name: "knowledge musa resume",
  path: process.env.NEXT_PUBLIC_RESUME_PATH,
};

export const NavigationLinks = [
  { label: "about", link: "/#about" },
  { label: "articles", link: "/#articles" },
  { label: "projects", link: "/#projects" },
  { label: "contact", link: "/#contact" },
];

export const Socials = {
  github: { icon: <TbBrandGithub />, link: process.env.NEXT_PUBLIC_GITHUB_LINK },
  twitter: { icon: <TbBrandTwitter />, link: process.env.NEXT_PUBLIC_TWITTER_LINK },
  linkedIn: { icon: <TbBrandLinkedin />, link: process.env.NEXT_PUBLIC_LINKEDIN_LINK },
};

export const Skills = [
  "javaScript", "typeScript", "React & Nextjs", "NodeJs", "Go", "Docker"
];