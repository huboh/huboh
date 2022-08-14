import { useState } from "react";
import useEventListener from "../useEventListener";


const useMediaQuery = (query: string) => {
  const matchMedia = window.matchMedia(query);
  const [matches, setMatches] = useState(matchMedia.matches);

  useEventListener<MediaQueryListEvent>({
    target: matchMedia,
    eventType: 'change',
    eventHandler: ({ matches }) => setMatches(matches)
  });

  return matches;
};


export {
  useMediaQuery as default
};