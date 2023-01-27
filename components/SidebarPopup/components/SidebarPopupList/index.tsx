import { ListProps } from "../../../List/types";
import { useClassString } from "../../../../hooks";

// components
import List from "../../../List";
import styles from "../../styles/sidebar-popup-list.module.scss";

export interface SidebarPopupListProps<T> extends ListProps<T> { }

const SidebarPopupList = <T extends any>(props: SidebarPopupListProps<T>) => {
  return (
    <List
      key_={ props.key_ }
      type={ props.type || "vertical" }
      items={ props.items }
      render={ props.render }
      className={ useClassString(styles["sidebar-popup-list"], props.className) }
    />
  );
};

export {
  SidebarPopupList as default
};