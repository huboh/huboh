import { FC } from "react";
import { HeaderProps } from "../../types";
import styles from "../../styles/header.module.scss";

export interface FullStopProps {
  text: string | HeaderProps["children"];
  showFullStop?: boolean;
}

const FullStop: FC<FullStopProps> = (props) => (
  !(props.showFullStop ?? true)
    ? null
    : (
      <span className={ styles["full-stop-wrapper"] }>
        <span children={ typeof props.text === "string" ? props.text.split(/\s/).pop() : null } />
        <span className={ styles["full-stop"] } />
      </span>
    )
);

export {
  FullStop as default
};