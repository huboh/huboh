import styles from '../../styles/button.module.scss';
import linkStyles from '../../styles/button-link.module.scss';

import { FC, ReactNode } from 'react';
import { ButtonStyle } from '../../types';
import { LinkProps, default as Link } from "next/link";
import { useClassString } from '../../../../hooks';

export interface ButtonLinkProps extends LinkProps {
  text: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  linkStyle?: ButtonStyle;
}

const ButtonLink: FC<ButtonLinkProps> = ({ text, href, icon, children, ...rest }) => {
  const label = text || children;
  const style = styles[rest.linkStyle || ""];
  const linkStyle = linkStyles[rest.linkStyle || ""];
  const className = useClassString(styles["button"], linkStyles["button-link"], style, linkStyle, rest.className);

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