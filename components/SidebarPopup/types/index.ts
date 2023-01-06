import { ReactNode } from "react";

export interface SidebarPopupProps {
  className?: string;
  children?: ReactNode;
  sidebarItem?: ReactNode;
  openSidebarPopup: boolean;
  onOverlayClick?: VoidFunction;
}
