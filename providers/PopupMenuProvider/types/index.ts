import { ReactNode } from "react";

export interface PopupMenuProps {
  children?: ReactNode;
}

export interface PopupMenu {
  toggleSidebar: VoidFunction,
  toggleThemePicker: VoidFunction,
  toggleColorSchemePicker: VoidFunction,
}