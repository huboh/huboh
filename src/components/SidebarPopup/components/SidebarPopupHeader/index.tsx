import "../../styles/sidebar-popup-header.scss";

import { FC } from "react";
import { joinClassStrings } from "../../../../utils";

export interface SidebarPopupHeaderProps {
  title: string;
  className?: string;
}


const SidebarPopupHeader: FC<SidebarPopupHeaderProps> = (props) => {
  const className = props.className || "";
  const classString = joinClassStrings("sidebar-popup-header", className);

  return (
    <header className={ classString }>
      <h1 className="header-title">{ props.title }</h1>
    </header>
  );
};


export {
  SidebarPopupHeader as default
};