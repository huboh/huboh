"use";
import styles from "./view.module.scss";
import { FC, ReactNode } from "react";
import { joinClassStrings } from "../../lib";

interface ViewProps {
  id?: string;
  className?: string;
  children?: ReactNode;
}

const View: FC<ViewProps> = (props) => {
  const id = props.id;
  const children = props.children;
  const className = joinClassStrings(styles["view"], props.className);

  return (
    <section
      id={ id }
      children={ children }
      className={ className }
    />
  );
};

export {
  View as default
};