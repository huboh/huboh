import styles from '../../styles/button-link.module.scss';

import { FC, ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';
import { ButtonStyle } from '../../types';
import { useClassString } from '../../../../hooks';

export interface ButtonExternalLinkProps extends LinkProps {
  to: string;
  text: string;
  icon?: ReactNode;
  linkStyle?: ButtonStyle;
}

const ButtonExternalLink: FC<ButtonExternalLinkProps> = ({ text, to, icon, children, ...rest }) => {
  const className = useClassString(styles.button, styles.button_link, rest.linkStyle, rest.className);

  return (
    <a { ...rest } className={ className } href={ to } target="_blank" rel="noreferrer" >
      { icon && <span className="icon-wrapper">{ icon }</span> }
      <span className="text-wrapper">{ text || children }</span>
    </a>
  );
};

export {
  ButtonExternalLink as default
};