import { FC, ReactNode } from "react";
import styles from "../../styles/sidebar-popup-list.module.scss";

export interface SidebarPopupListItemProps {
  noStyle?: boolean;
  children?: ReactNode;
}

const SidebarPopup: FC<SidebarPopupListItemProps> = (props) => {
  return (
    <li
      children={ props.children }
      className={ styles["sidebar-popup-list-item"] }
    />
  );
};

export {
  SidebarPopup as default
};