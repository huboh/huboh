import styles from "../../styles/sidebar-popup-list.module.scss";

import { FC } from "react";
import { useClassString } from "../../../../hooks";

// components
import SidebarPopupListItem from "../SidebarPopupListItem";

export interface SidebarPopupListProps<T> {
  items: T[];
  noStyles?: boolean;
  className?: string;
  component: FC<T>;
}

const SidebarPopupList = <T extends any>(props: SidebarPopupListProps<T>) => {
  const className = useClassString(props.noStyles ? "" : styles.sidebar_popup_list, props.className);
  const listItems = props.items.map(
    (listItem, index) => <SidebarPopupListItem key={ `popup-list-item-${index}` } children={ props.component(listItem) } />
  );

  return (
    <ul
      children={ listItems }
      className={ className }
    />
  );
};

export {
  SidebarPopupList as default
};