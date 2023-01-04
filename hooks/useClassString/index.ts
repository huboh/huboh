import { useMemo } from "react";
import { joinClassStrings } from "../../lib";

export const useClassString = (...classNames: Parameters<typeof joinClassStrings>) => {
  return useMemo(() => joinClassStrings(...classNames), [...classNames]);
};

export {
  useClassString as default
};