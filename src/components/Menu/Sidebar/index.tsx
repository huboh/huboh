import "./styles/sidebar-menu.scss";

import { FC } from "react";
import { NavigationLinks } from "../../../constants";

// hooks
import { useLocation } from "react-router-dom";

// component
import SidebarPopup from "../../SidebarPopup";
import DownLoadResume from "../../DownLoadResume";
import NavMenuItem from "../../Header/components/NavMenu/NavMenuItem";
import SidebarPopupList from "../../SidebarPopup/components/SidebarPopupList";
import SidebarPopupHeader from "../../SidebarPopup/components/SidebarPopupHeader";
import SidebarPopupFooter from "../../SidebarPopup/components/SidebarPopupFooter";

export interface SidebarMenuProps {
  openSidebarMenu: boolean;
  onOverlayClick?: VoidFunction;
}


const Sidebar: FC<SidebarMenuProps> = ({ openSidebarMenu, onOverlayClick }) => {
  const { hash } = useLocation();

  const render = (navigationLink: (typeof NavigationLinks)[0]) => (
    <NavMenuItem
      className="nav-menu-list-item"
      href={ navigationLink.link }
      label={ navigationLink.label }
      isActive={ hash === navigationLink.link }
    />
  );

  return (
    <SidebarPopup className="sidebar-menu-wrapper" openSidebarPopup={ openSidebarMenu } onOverlayClick={ onOverlayClick }>
      <SidebarPopupHeader title="menu" />
      <SidebarPopupList render={ render } listItems={ NavigationLinks } />
      <SidebarPopupFooter children={ <DownLoadResume className="sidebar-menu-cta" /> } />
    </SidebarPopup>
  );
};


export {
  Sidebar as default
};