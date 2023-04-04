import { FC } from "react";
import dynamic from "next/dynamic";
import { NavigationLinks } from "../../../constants";
import { SidebarPopupProps } from "../../SidebarPopup/types";

// styles
import styles from "./styles/sidebar-menu.module.scss";

// hooks
import { useState } from "react";
import { useEventListener } from "../../../hooks";

// component
import SidebarPopup from "../../SidebarPopup";
import DownLoadResume from "../../DownLoadResume";
import NavMenuItem from "../../Header/components/NavMenu/NavMenuItem";
import SidebarPopupList from "../../SidebarPopup/components/SidebarPopupList";
import SidebarPopupHeader from "../../SidebarPopup/components/SidebarPopupHeader";
import SidebarPopupFooter from "../../SidebarPopup/components/SidebarPopupFooter";

export interface SidebarMenuProps extends SidebarPopupProps { }

const Sidebar: FC<SidebarMenuProps> = (props) => {
  const [hash, setHash] = useState(window.location.hash);

  useEventListener({
    target: window,
    eventType: "hashchange",
    eventHandler: (event) => setHash((event.target as Window).location.hash)
  });

  return (
    <SidebarPopup { ...props } className={ styles["sidebar-menu-wrapper"] }>
      <SidebarPopupHeader
        title={ "menu" }
      />
      <SidebarPopupList
        key_="label"
        items={ NavigationLinks }
        render={ (link) => <NavMenuItem className={ styles["nav-menu-item"] } href={ link.link } label={ link.label } isActive={ hash === link.link } /> }
      />
      <SidebarPopupFooter
        children={ <DownLoadResume className={ styles["sidebar-menu-cta"] } /> }
      />
    </SidebarPopup >
  );
};

export default dynamic(
  () => Promise.resolve(Sidebar), { ssr: false }
);