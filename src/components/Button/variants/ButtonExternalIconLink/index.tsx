import "../IconLink/icon-link.scss";
import { FC, ReactNode } from "react";
import { LinkProps } from 'react-router-dom';
import { joinClassStrings } from "../../../../utils";

export interface IconExternalLinkProps extends LinkProps {
  to: string;
  icon?: ReactNode;
  title?: string;
}

const IconExternalLink: FC<IconExternalLinkProps> = ({ icon, ...props }) => {
  const className = props.className || "";
  const classString = joinClassStrings("see-through", className);

  return (
    <a { ...props } href={ props.to } className={ `button-icon link-icon ${classString}` } children={ icon } />
  );
};

export {
  IconExternalLink as default
};