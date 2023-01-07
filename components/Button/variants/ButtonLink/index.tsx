import styles from '../../styles/button-link.module.scss';

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
  const className = useClassString(styles.button, styles.button_link, rest.linkStyle, rest.className);

  return (
    <Link { ...rest } href={ href } className={ className }  >
      { icon && <span className={ styles.icon_wrapper }>{ icon }</span> }
      <span className={ styles.text_wrapper }>
        { text || children }
      </span>
    </Link>
  );
};

export {
  ButtonLink as default
};