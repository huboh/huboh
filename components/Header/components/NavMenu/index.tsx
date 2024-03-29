import { FC } from "react";
import { NavigationLinks } from "../../../../constants";

// component
import List from "../../../List";
import NavMenuItem from "./NavMenuItem";

// styles
import styles from "./styles/nav-menu.module.scss";

// hooks
import { useState } from "react";
import { useClassString, useEventListener } from "../../../../hooks";

export interface NavMenuProps {
  layout?: "horizontal" | "vertical";
  isMobile?: boolean;
  className?: string;
}

const NavMenu: FC<NavMenuProps> = (props) => {
  const [hash, setHash] = useState(window.location.hash);
  const className = useClassString(styles["nav-menu"], styles[props.layout || "horizontal"]);

  useEventListener({
    target: window,
    eventType: "hashchange",
    eventHandler: (event) => setHash((event.target as Window).location.hash)
  });

  return props.isMobile ? null : (
    <nav className={ className }>
      <List
        key_="label"
        items={ NavigationLinks }
        className={ styles["nav-list"] }
        render={ ({ link, label }) => <NavMenuItem href={ link } label={ label } isActive={ hash === link } /> }
      />
    </nav>
  );
};

export {
  NavMenu as default
};