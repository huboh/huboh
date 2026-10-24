import styles from '../../styles/button.module.scss';
import linkStyles from '../../styles/button-link.module.scss';

import { ButtonStyle } from '../../types';
import { FC, ReactNode } from 'react';
import { joinClassStrings } from "@/lib";
import { LinkProps, default as Link } from "next/link";

export interface ButtonLinkProps extends LinkProps {
  text: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  linkStyle?: ButtonStyle;
}

const ButtonLink: FC<ButtonLinkProps> = ({ text, href, icon, linkStyle, children, ...rest }) => {
  const label = text || children;
  const className = joinClassStrings(styles["button"], linkStyles["button-link"], styles[linkStyle || ""], linkStyles[linkStyle || ""], rest.className);

  return (
    <Link { ...rest } href={ href } className={ className }>
      { icon && <span className={ styles["icon-wrapper"] }>{ icon }</span> }
      { label && <span className={ styles["text-wrapper"] }>{ label }</span> }
    </Link>
  );
};

export {
  ButtonLink as default
};