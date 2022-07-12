import { ReactNode } from "react";

export interface PopupMenuProps {
  children?: ReactNode;
}

export interface PopupMenu {
  toggleColorSchemePickerMenu: VoidFunction,
  toggleThemePickerMenu: VoidFunction,
  toggleSidebarMenu: VoidFunction,
}