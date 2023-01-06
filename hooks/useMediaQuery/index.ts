import { useState, useLayoutEffect } from "react";
import { useWindow, useEventListener } from "../";

export const useMediaQuery = (query: string) => {
  const _window_ = useWindow();
  const matchMedia = _window_?.matchMedia(query);
  const [matches, setMatches] = useState(matchMedia?.matches);

  useLayoutEffect(() => {
    setMatches(matchMedia?.matches);
  }, [matchMedia?.matches]);

  useEventListener({
    target: matchMedia!,
    eventType: 'change',
    eventHandler: ({ matches }) => setMatches(matches)
  });

  return matches;
};

export {
  useMediaQuery as default
};