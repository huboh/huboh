import { ReactNode } from "react";

export interface PopupMenuProps {
  children?: ReactNode;
}

export interface PopupMenu {
  toggleThemePickerMenu: VoidFunction,
  toggleSidebarMenu: VoidFunction,
}