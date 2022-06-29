import { FC } from "react";

// component
import SidebarPopup from "../../SidebarPopup";

export interface SidebarMenuProps {
  openSidebarMenu: boolean;
  onOverlayClick?: VoidFunction;
}


const SidebarMenu: FC<SidebarMenuProps> = ({ openSidebarMenu, onOverlayClick }) => (
  <SidebarPopup openSidebarPopup={ openSidebarMenu } onOverlayClick={ onOverlayClick }>
    hello
  </SidebarPopup>
);


export {
  SidebarMenu as default
};