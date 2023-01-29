import styles from "../styles/nav-menu-item.module.scss";

import { FC } from "react";
import { useClassString } from "../../../../../hooks";

export interface NavMenuItemProps {
  href: string;
  label: string;
  isActive?: boolean;
  className?: string;
}

const NavMenuItem: FC<NavMenuItemProps> = (props) => {
  const href = props.href;
  const label = props.label;
  const className = useClassString(styles["nav-menu-item"], props.isActive ? styles["active"] : "", props.className);

  return (
    <a
      href={ href }
      children={ label }
      className={ className }
    />
  );
};

export {
  NavMenuItem as default
};