import { FC } from "react";
import { NavigationLinks } from "../../../constants";
import { SidebarPopupProps } from "../../SidebarPopup/types";

// styles
import styles from "./styles/sidebar-menu.module.scss";

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

export interface SidebarMenuProps extends SidebarPopupProps { }

const Sidebar: FC<SidebarMenuProps> = (props) => {
  const router = useRouter();
  const _window_ = useWindow();
  const [hash, setHash] = useState(`#${router.asPath.split("#")[1]}`);

  useEventListener({
    target: _window_!,
    eventType: "hashchange",
    eventHandler: (event) => setHash((event.target as Window).location.hash)
  });

  return (
    <SidebarPopup { ...props } className={ styles.sidebar_menu_wrapper }>
      <SidebarPopupHeader
        title={ "menu" }
      />
      <SidebarPopupList
        key_="label"
        items={ NavigationLinks }
        render={ (link) => <NavMenuItem className={ styles.nav_menu_item } href={ link.link } label={ link.label } isActive={ hash === link.link } /> }
      />
      <SidebarPopupFooter
        children={ <DownLoadResume className={ styles.sidebar_menu_cta } /> }
      />
    </SidebarPopup >
  );
};

export {
  Sidebar as default
};