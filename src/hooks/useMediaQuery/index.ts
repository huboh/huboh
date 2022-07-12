import { useState } from "react";
import useEventListener from "../useEventListener";


const useMediaQuery = (query: string) => {
  const matchMedia = window.matchMedia(query);
  const [matches, setMatches] = useState(matchMedia.matches);

  useEventListener({
    target: matchMedia,
    eventType: 'change',
    eventHandler: (event) => setMatches((event as MediaQueryListEvent).matches)
  });

  return matches;
};


export {
  useMediaQuery as default
};