import styles from "../../styles/link.module.scss";

import { FC, ReactNode } from "react";
import { useClassString } from "../../../../hooks";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

export interface LinkProps extends NextLinkProps {
  text: string;
  children?: ReactNode;
  className?: string;
}

const Link: FC<LinkProps> = ({ children, text, ...props }) => {
  const className = useClassString(styles.link, props.className);

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