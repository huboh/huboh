import "./styles/sidebar-popup.scss";

import { FC } from "react";
import { SidebarPopupProps } from "./types";
import { joinClassStrings } from "../../utils";

import ModalOverlay from "../ModalOverlay";
import useAnimatedComponent from "../../hooks/useAnimatedComponent";


const SidebarPopup: FC<SidebarPopupProps> = ({ openSidebarPopup, ...props }) => {
  const [Component] = useAnimatedComponent({
    className: joinClassStrings("popup-menu-wrapper", props.className || ""),
    display: openSidebarPopup,
    tagName: 'aside',
    transition: {
      duration: 0.05,
    },
    lifeCycleTransitions: {
      exit: { x: "80%" },
      enter: { x: "0%" },
      initial: { x: "100%" },
    }
  });

  return (
    <ModalOverlay isOpen={ openSidebarPopup } className="popup-overlay" onClick={ props.onOverlayClick }>
      <Component children={ props.sidebarItem || props.children } />
    </ModalOverlay>
  );
};


export {
  SidebarPopup as default
};