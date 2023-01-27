import { FC } from "react";
import { SidebarPopupProps } from "./types";
import styles from "./styles/sidebar-popup.module.scss";

// components
import ModalOverlay from "../ModalOverlay";

// hooks
import useClassString from "../../hooks/useClassString";
import useAnimatedComponent from "../../hooks/useAnimatedComponent";

const SidebarPopup: FC<SidebarPopupProps> = (props) => {
  const isOpen = props.openSidebarPopup;
  const className = useClassString(styles.popup_menu_wrapper, props.className);
  const [Component] = useAnimatedComponent({
    display: isOpen,
    tagName: 'aside',
    className: className,
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
    <ModalOverlay
      isOpen={ isOpen }
      onClick={ props.onOverlayClick }
      children={ <Component children={ props.sidebarItem || props.children } /> }
      className={ styles.popup_overlay }
    />
  );
};

export {
  SidebarPopup as default
};