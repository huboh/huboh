import { useState, useRef } from "react";
import { useWindow, useEventListener } from "../";

const window_ = typeof window !== "undefined" ? window : null;

const getScrollData = (lastScrollPosition: number) => {
  const currentScrollPosition = window_?.scrollY ?? 0;

  return {
    isScrolledUp: currentScrollPosition <= 30,
    isScrollingUp: currentScrollPosition < lastScrollPosition,
    isScrollingDown: currentScrollPosition > lastScrollPosition,
  };
};

export const useWindowScrollInfo = () => {
  const _window_ = useWindow();
  const lastScrollPositionRef = useRef(0);
  const [currentScrollInfo, setCurrentScrollInfo] = useState(getScrollData(lastScrollPositionRef.current));

  useEventListener({
    target: _window_!,
    eventType: "scroll",
    eventHandler: async (event) => {
      const window = event.currentTarget as Window;
      const currentScrollPosition = window.scrollY;
      const lastScrollPosition = lastScrollPositionRef.current;

      const isScrolledUp = currentScrollPosition <= 30;
      const isScrollingUp = currentScrollPosition < lastScrollPosition;
      const isScrollingDown = currentScrollPosition > lastScrollPosition;

      if (
        currentScrollInfo.isScrolledUp !== isScrolledUp ||
        currentScrollInfo.isScrollingUp !== isScrollingUp ||
        currentScrollInfo.isScrollingDown !== isScrollingDown
      ) {
        setCurrentScrollInfo(getScrollData(lastScrollPosition));
      };

      lastScrollPositionRef.current = currentScrollPosition;
    }
  });

  return currentScrollInfo;
};


export {
  useWindowScrollInfo as default
};