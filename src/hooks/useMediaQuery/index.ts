import { useState } from "react";
import { useEventListener } from "../useEventListener";

export const useMediaQuery = (query: string) => {
  const matchMedia = window.matchMedia(query);
  const [matches, setMatches] = useState(matchMedia.matches);

  useEventListener({
    target: matchMedia,
    eventType: 'change',
    eventHandler: ({ matches }) => setMatches(matches)
  });

  return matches;
};

export {
  useMediaQuery as default
};