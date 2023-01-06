import styles from "./styles/sidebar-menu.module.scss";

import { FC } from "react";
import { NavigationLinks } from "../../../constants";

// hooks
import { useState } from "react";
import { useRouter } from "next/router";
import { useWindow, useEventListener } from "../../../hooks";

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
  const router = useRouter();
  const _window_ = useWindow();
  const [hash, setHash] = useState(`#${router.asPath.split("#")[1]}`);

  useEventListener({
    target: _window_!,
    eventType: "hashchange",
    eventHandler: (event) => setHash((event.target as Window).location.hash)
  });

  return (
    <SidebarPopup className={ styles.sidebar_menu_wrapper } openSidebarPopup={ openSidebarMenu } onOverlayClick={ onOverlayClick } >
      <SidebarPopupHeader
        title={ "menu" }
      />
      <SidebarPopupList
        items={ NavigationLinks }
        component={ (link) => <NavMenuItem className={ styles.nav_menu_item } href={ link.link } label={ link.label } isActive={ hash === link.link } /> }
      />
      <SidebarPopupFooter>
        <DownLoadResume className={ styles.sidebar_menu_cta } />
      </SidebarPopupFooter>
    </SidebarPopup >
  );
};

export {
  Sidebar as default
};