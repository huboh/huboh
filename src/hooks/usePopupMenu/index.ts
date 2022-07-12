import { useContext } from "react";
import { PopupMenuContext } from "../../providers/PopupMenuProvider";


const usePopupMenu = () => useContext(PopupMenuContext);


export {
  usePopupMenu as default
};