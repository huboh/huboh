import styles from "../../styles/link.module.scss";

import { useClassString } from "../../../../hooks";
import { FC, HTMLAttributeAnchorTarget, ReactNode } from "react";
import { default as NextLink, LinkProps as NextLinkProps } from "next/link";

export interface LinkProps extends NextLinkProps {
  text: string;
  target?: HTMLAttributeAnchorTarget;
  children?: ReactNode;
  className?: string;
}

const Link: FC<LinkProps> = ({ children, text, ...props }) => {
  const className = useClassString(styles["link"], props.className);

  return (
    <NextLink
      { ...props }
      className={ className }
      children={ text || children }
    />
  );
};

export {
  Link as default
};