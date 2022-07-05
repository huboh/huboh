import "./nav-menu-item.scss";

import { FC } from "react";
import { joinClassStrings } from "../../../../../utils";

export interface NavMenuItemProps {
  href: string;
  label: string;
  isActive?: boolean;
  className?: string;
}


const NavMenuItem: FC<NavMenuItemProps> = (props) => {
  const className = props.className || "";
  const activeClass = props.isActive ? "active" : "";
  const classString = joinClassStrings("nav-menu-wrapper-item", activeClass, className);

  return (
    <a className={ classString } href={ props.href }>
      { props.label }
    </a>
  );
};


export {
  NavMenuItem as default
};