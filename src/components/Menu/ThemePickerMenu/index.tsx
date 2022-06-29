import { FC } from "react";

// component
import SidebarPopup from "../../SidebarPopup";

export interface ThemePickerMenuProps {
  openThemePickerMenu: boolean;
  onOverlayClick?: VoidFunction;
}


const ThemePickerMenu: FC<ThemePickerMenuProps> = ({ openThemePickerMenu, onOverlayClick }) => (
  <SidebarPopup openSidebarPopup={ openThemePickerMenu } onOverlayClick={ onOverlayClick }>
    hello
  </SidebarPopup>
);


export {
  ThemePickerMenu as default
};