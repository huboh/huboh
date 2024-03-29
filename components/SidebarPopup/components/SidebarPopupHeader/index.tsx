import styles from "../../styles/sidebar-popup-header.module.scss";
import { FC } from "react";
import { useClassString } from "../../../../hooks";

export interface SidebarPopupHeaderProps {
  title: string;
  className?: string;
}

const SidebarPopupHeader: FC<SidebarPopupHeaderProps> = (props) => {
  const className = useClassString(styles["sidebar-popup-header"], props.className);

  return (
    <header className={ className }>
      <h1 children={ props.title } className={ styles["header-title"] } />
    </header>
  );
};

export {
  SidebarPopupHeader as default
};