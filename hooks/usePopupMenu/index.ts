import { useContext } from "react";
import { PopupMenuContext } from "../../providers/PopupMenuProvider";

export const usePopupMenu = () => useContext(PopupMenuContext);

export {
  usePopupMenu as default
};