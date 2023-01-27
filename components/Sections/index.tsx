import { FC } from "react";
import { Project, Article } from "../../types";

// components
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Articles from "./components/Articles";
import Projects from "./components/Projects";
import GetInTouch from "./components/GetInTouch";

export interface SectionsProps {
  projects: Project[];
  articles: Article[];
}

const Sections: FC<SectionsProps> = (props) => {
  return (
    <main className="main">
      <Hero />
      <AboutMe />
      <Articles articles={ props.articles } />
      <Projects projects={ props.projects } />
      <GetInTouch />
    </main>
  );
};

export {
  Sections as default
};