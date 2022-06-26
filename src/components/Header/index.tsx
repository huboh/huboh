import "./header.scss";
import { FC, useRef } from "react";

import Logo from "../Logo";
import Navbar from "./Navbar";

import useEventListener from "../../hooks/useEventListener";


const Header: FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollPositionRef = useRef(0);

  useEventListener({
    target: window,
    eventType: "scroll",
    eventHandler: async (event) => {
      const window = event.currentTarget as Window;
      const currentScrollPosition = window.scrollY;
      const lastScrollPosition = lastScrollPositionRef.current;

      const isScrolledUp = currentScrollPosition <= 30;
      const isScrollingUp = currentScrollPosition < lastScrollPosition;
      const isScrollingDown = currentScrollPosition > lastScrollPosition;

      headerRef.current?.classList?.toggle?.("scrolled-up", isScrolledUp);
      headerRef.current?.classList?.toggle?.("scrolling-up", isScrolledUp ? !isScrolledUp : isScrollingUp);
      headerRef.current?.classList?.toggle?.("scrolling-down", isScrollingDown);

      lastScrollPositionRef.current = currentScrollPosition;
    }
  });

  return (
    <header className="header" ref={ headerRef }>
      <Logo />
      <Navbar />
    </header>
  );
};


export {
  Header as default
};