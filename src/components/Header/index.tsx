import "./styles/header.scss";
import { FC, useRef } from "react";

// components
import Logo from "../Logo";
import NavMenu from "./components/NavMenu";
import SecondaryNavbar from "./components/SecondaryNavbar";

// hooks
import useMediaQuery from "../../hooks/useMediaQuery";
import useWindowScrollInfo from "../../hooks/useWindowScrollInfo";


const Header: FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const isMobile = useMediaQuery("(max-width: 760px)");
  const { isScrolledUp, isScrollingUp, isScrollingDown } = useWindowScrollInfo();

  headerRef.current?.classList?.toggle?.("scrolled-up", isScrolledUp);
  headerRef.current?.classList?.toggle?.("scrolling-down", isScrollingDown);
  headerRef.current?.classList?.toggle?.("scrolling-up", isScrolledUp ? !isScrolledUp : isScrollingUp);

  return (
    <header className="header" ref={ headerRef }>
      <Logo.Linkable />
      <NavMenu isMobile={ isMobile } />
      <SecondaryNavbar isMobile={ isMobile } />
    </header>
  );
};


export {
  Header as default
};