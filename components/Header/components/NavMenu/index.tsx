import { FC } from "react";
import { NavigationLinks } from "../../../../constants";

// hooks
import { useState } from "react";
import { useWindow, useClassString, useEventListener } from "../../../../hooks";

// component
import styles from "./styles/nav-menu.module.scss";
import NavMenuItem from "./NavMenuItem";

export interface NavMenuProps {
  layout?: "horizontal" | "vertical";
  isMobile?: boolean;
  className?: string;
}

const NavMenu: FC<NavMenuProps> = (props) => {
  const _window_ = useWindow();
  const [hash, setHash] = useState(_window_?.location?.hash || "");
  const className = useClassString(styles.nav_menu, styles[props.layout || "horizontal"]);
  const navigationLinks = !props.isMobile && NavigationLinks.map(
    ({ link, label }) => <NavMenuItem key={ link } href={ link } label={ label } isActive={ hash === link } />
  );

  useEventListener({
    target: _window_!,
    eventType: "hashchange",
    eventHandler: (event) => setHash((event.target as Window).location.hash)
  });

  return props.isMobile ? null : (
    <nav className={ className }>
      <ul children={ navigationLinks } className={ styles.nav_list } />
    </nav>
  );
};

export {
  NavMenu as default
};