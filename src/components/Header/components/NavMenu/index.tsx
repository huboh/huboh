import "./nav-menu.scss";

import { FC } from "react";
import { useLocation } from "react-router-dom";
import { joinClassStrings } from "../../../../utils";
import { NavigationLinks } from "../../../../constants";

// component
import NavMenuItem from "./NavMenuItem";

export interface NavMenuProps {
  className?: string;
  isMobile?: boolean;
  layout?: "horizontal" | "vertical";
}


const NavMenu: FC<NavMenuProps> = (props) => {
  const { hash } = useLocation();
  const layout = props.layout || "horizontal";
  const classString = joinClassStrings("nav-menu-wrapper", layout);

  const buildNavItem = (navItem: (typeof NavigationLinks)[0]) => (
    <NavMenuItem
      key={ navItem.link }
      href={ navItem.link }
      label={ navItem.label }
      isActive={ hash === navItem.link }
    />
  );

  return props.isMobile ? null : (
    <nav className={ classString }>
      <ul className="nav-list-wrapper" children={ NavigationLinks.map(buildNavItem) } />
    </nav>
  );
};


export {
  NavMenu as default
};