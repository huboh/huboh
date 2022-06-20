import './button-link.scss';
import { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { ButtonStyle } from '../Button';

export interface ButtonLinkProps extends LinkProps {
  text: string;
  icon?: ReactNode;
  linkStyle?: ButtonStyle;
}

const ButtonLink: FC<ButtonLinkProps> = ({ text, to, icon, linkStyle, children, ...rest }) => (
  <Link { ...rest } className={ `button button-link ${linkStyle || ''}`.trim() } to={ to } >
    { icon && <span className="icon-wrapper">{ icon }</span> }
    <span className='text-wrapper'>
      { text || children }
    </span>
  </Link>
);

export {
  ButtonLink as default
};