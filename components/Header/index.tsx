import { FC } from "react";
import styles from "./styles/header.module.scss";

// hooks
import { useRef } from "react";
import { useMediaQuery, useClassString, useWindowScrollInfo } from "../../hooks";

// components
import Logo from "../Logo";
import NavMenu from "./components/NavMenu";
import SecondaryNavbar from "./components/SecondaryNavbar";

interface HeaderProps {
  id?: string;
  className?: string;
}

const Header: FC<HeaderProps> = (props) => {
  const id = props.id;
  const ref = useRef<HTMLElement>(null);
  const view = useWindowScrollInfo();
  const isMobile = useMediaQuery("(max-width: 760px)");
  const className = useClassString(styles["header"], props.className);

  ref.current?.classList?.toggle?.(styles["scrolled-up"], view.isScrolledUp);
  ref.current?.classList?.toggle?.(styles["scrolling-down"], view.isScrollingDown);
  ref.current?.classList?.toggle?.(styles["scrolling-up"], view.isScrolledUp ? !view.isScrolledUp : view.isScrollingUp);

  return (
    <header id={ id } ref={ ref } className={ className }>
      <Logo.Link />
      <NavMenu isMobile={ isMobile } />
      <SecondaryNavbar isMobile={ isMobile } />
    </header>
  );
};

export {
  Header as default
};