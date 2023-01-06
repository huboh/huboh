import styles from "./view.module.scss";
import { FC, ReactNode } from "react";
import { useClassString } from "../../hooks";

interface ViewProps {
  id?: string;
  className?: string;
  children?: ReactNode;
}

const View: FC<ViewProps> = (props) => {
  const id = props.id;
  const children = props.children;
  const className = useClassString(styles.view, props.className);

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