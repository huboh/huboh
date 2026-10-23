import { useEventListener } from "../";
import { useState, useEffect } from "react";

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  const [mediaQuery, setMediaQuery] = useState<MediaQueryList | null>(null);

  useEffect(
    () => {
      const mql = window.matchMedia(query);
      setMatches(mql.matches);
      setMediaQuery(mql);
    },
    [query]
  );

  useEventListener({
    target: mediaQuery!,
    eventType: "change",
    eventHandler: ({ matches }) => setMatches(matches)
  });

  return matches;
};

export {
  useMediaQuery as default
};