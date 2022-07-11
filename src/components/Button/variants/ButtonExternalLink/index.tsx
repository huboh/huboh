import '../ButtonLink/button-link.scss';
import { FC, ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';

import { ButtonStyle } from '../Button';
import { joinClassStrings } from "../../../../utils";

export interface ButtonExternalLinkProps extends LinkProps {
  to: string;
  text: string;
  icon?: ReactNode;
  linkStyle?: ButtonStyle;
}

const ButtonExternalLink: FC<ButtonExternalLinkProps> = ({ text, to, icon, children, ...rest }) => {
  const linkStyle = rest.linkStyle || "";
  const className = rest.className || "";
  const classString = joinClassStrings(linkStyle, className);

  return (
    <a { ...rest } className={ `button button-link button-external-link ${classString}`.trim() } href={ to } target="_blank" rel="noreferrer" >
      { icon && <span className="icon-wrapper">{ icon }</span> }
      <span className='text-wrapper'>
        { text || children }
      </span>
    </a>
  );
};

export {
  ButtonExternalLink as default
};