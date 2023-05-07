import styles from "../../styles/link.module.scss";

import { TbExternalLink } from "react-icons/tb";
import { useClassString } from "../../../../hooks";
import { FC, HTMLAttributeAnchorTarget, ReactNode } from "react";
import { default as NextLink, LinkProps as NextLinkProps } from "next/link";

export interface LinkProps extends NextLinkProps {
  text: string;
  target?: HTMLAttributeAnchorTarget;
  children?: ReactNode;
  className?: string;
  showExtIcon?: boolean;
}

const Link: FC<LinkProps> = ({ children, text, showExtIcon, ...props }) => {
  const content = text || children;
  const className = useClassString(styles["link"], props.className);

  return (
    <NextLink { ...props } children={ showExtIcon ? [content, <TbExternalLink key={ "link-icon" } />] : content } className={ className } />
  );
};

export {
  Link as default
};