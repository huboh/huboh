import { FC } from "react";
import styles from "../../styles/header.module.scss";

export interface FullStopProps {
  showFullStop?: boolean;
}

const FullStop: FC<FullStopProps> = (props) => (
  (props.showFullStop ?? true) ? <span className={ styles.full_stop } /> : null
);

export {
  FullStop as default
};