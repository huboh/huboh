import { useState, useEffect } from "react";
import { useEventListener } from "../useEventListener";

export const useMediaQuery = (query: string) => {
  // defaulting to false initially so the render tree doesn't differ on server and client
  // which causes an error during hydration
  const [matches, setMatches] = useState(false);
  const isBrowser = typeof window !== "undefined";
  const mediaQueryList = isBrowser ? window.matchMedia(query) : null;

  useEffect(() => {
    setMatches(window.matchMedia(query).matches);
  }, [query]);

  useEventListener({
    target: mediaQueryList!,
    eventType: 'change',
    eventHandler: ({ matches }) => setMatches(matches)
  });

  return matches;
};

export {
  useMediaQuery as default
};