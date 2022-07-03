import "./styles/sidebar-popup.scss";

import { FC } from "react";
import { SidebarPopupProps } from "./types";
import { joinClassStrings } from "../../utils";

import ModalOverlay from "../ModalOverlay";
import useAnimatedComponent from "../../hooks/useAnimatedComponent";


const SidebarPopup: FC<SidebarPopupProps> = ({ openSidebarPopup, ...props }) => {
  const classString = joinClassStrings("popup-menu-wrapper", props.className || "");
  const [Component] = useAnimatedComponent({
    tagName: 'aside',
    className: classString,
    display: openSidebarPopup,
    transition: {
      duration: 0.1
    },
    lifeCycleTransitions: {
      exit: { y: 0, x: 50, opacity: 0 },
      enter: { y: 0, x: 0, opacity: 1 },
      initial: { y: 0, x: 50, opacity: 0 },
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