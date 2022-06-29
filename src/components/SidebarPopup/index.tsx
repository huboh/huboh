import "./sidebar-popup.scss";
import { FC, ReactNode } from "react";

import ModalOverlay from "../ModalOverlay";
import useAnimatedComponent from "../../hooks/useAnimatedComponent";

export interface SidebarPopupProps {
  children?: ReactNode;
  sidebarItem?: ReactNode;
  openSidebarPopup: boolean;
  onOverlayClick?: VoidFunction;
}


const SidebarPopup: FC<SidebarPopupProps> = ({ openSidebarPopup, ...props }) => {
  const [Component] = useAnimatedComponent({
    tagName: 'aside',
    className: `popup-menu-wrapper`,
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

  return !openSidebarPopup ? null : (
    <ModalOverlay isOpen={ openSidebarPopup } className="popup-overlay" onClick={ props.onOverlayClick }>
      <Component
        children={ props.sidebarItem || props.children }
      />
    </ModalOverlay>
  );
};


export {
  SidebarPopup as default
};