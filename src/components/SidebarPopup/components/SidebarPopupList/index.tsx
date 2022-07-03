import "../../styles/sidebar-popup-list.scss";

import { ReactNode } from "react";
import { joinClassStrings } from "../../../../utils";
import SidebarPopupListItem from "../SidebarPopupListItem";

export interface SidebarPopupListProps<T> {
  listItems: T[];
  noStyles?: boolean;
  className?: string;
  render: (props: T) => ReactNode;
}


const SidebarPopupList = <T extends any>(props: SidebarPopupListProps<T>) => {
  const className = props.className || "";
  const defaultClassName = props.noStyles ? "" : "sidebar-popup-list";
  const classString = joinClassStrings(defaultClassName, className);

  return (
    <ul
      className={ classString }
      children={ props.listItems.map((listItem, index) => (
        <SidebarPopupListItem key={ `popup-list-item-${index}` } children={ props.render(listItem) } />
      )) }
    />
  );
};


export {
  SidebarPopupList as default
};