import { useState, useRef } from "react";
import { useEventListener } from "../";

type ScrollData = {
  isScrolledUp: boolean;
  isScrollingUp: boolean;
  isScrollingDown: boolean;
};

const getScrollData = (lastScrollPosition: number): ScrollData => {
  const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
  return {
    isScrolledUp: scrollY <= 10,
    isScrollingUp: scrollY < lastScrollPosition,
    isScrollingDown: scrollY > lastScrollPosition,
  };
};

const useWindowScrollInfo = () => {
  const lastScrollPositionRef = useRef(0);
  const [currentScrollInfo, setCurrentScrollInfo] = useState<ScrollData>({
    isScrolledUp: true,
    isScrollingUp: false,
    isScrollingDown: false,
  });

  useEventListener({
    target: (typeof window !== "undefined" ? window : null)!,
    eventType: "scroll",
    onSetup: (target) => {
      // synchronize with the restored browser scroll position.
      lastScrollPositionRef.current = target.scrollY;
      setCurrentScrollInfo(getScrollData(target.scrollY));
    },
    eventHandler: async (event) => {
      const lastScrollPosition = lastScrollPositionRef.current;
      const currentScrollPosition = (event.currentTarget as Window).scrollY;
      lastScrollPositionRef.current = currentScrollPosition;
      setCurrentScrollInfo(getScrollData(lastScrollPosition));
    },
  });

  return currentScrollInfo;
};


export {
  useWindowScrollInfo as default,
  useWindowScrollInfo
};