import { FC } from "react";
import { Project } from "../../../../../types";

// styles
import styles from "../../styles/project.module.scss";

interface TechStackProps {
  techStacks: Project['techStacks'];
}

const TechStack: FC<TechStackProps> = ({ techStacks }) => {
  const className = styles["project-stack-list"];
  const listItemClassName = styles["project-stack-list-item"];

  return (
    !techStacks?.length ? null : (
      <ul
        children={ techStacks.map((stack, index) => <li key={ `${stack}-${index}` } children={ stack } className={ listItemClassName } />) }
        className={ className }
      />
    )
  );
};

export {
  TechStack as default
};