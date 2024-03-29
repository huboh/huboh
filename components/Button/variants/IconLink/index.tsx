import styles from "../../styles/icon-link.module.scss";

import { FC, ReactNode } from "react";
import { useClassString } from "../../../../hooks";
import { LinkProps, default as Link } from "next/link";

export interface IconLinkProps extends LinkProps {
  icon?: ReactNode;
  title?: string;
  className?: string;
}

const IconLink: FC<IconLinkProps> = ({ icon, ...props }) => {
  const style = styles["see-through"];
  const className = useClassString(styles["button-icon"], styles["link-icon"], style, props.className);

  return (
    <Link
      { ...props }
      children={ icon }
      className={ className }
    />
  );
};

export {
  IconLink as default
};