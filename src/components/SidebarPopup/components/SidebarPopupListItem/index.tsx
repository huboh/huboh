import { FC, ReactNode } from "react";

export interface SidebarPopupListItemProps {
  children?: ReactNode;
  noStyle?: boolean;
}

const SidebarPopup: FC<SidebarPopupListItemProps> = (props) => (
  <li className="sidebar-popup-list-item" children={ props.children } />
);

export {
  SidebarPopup as default
};