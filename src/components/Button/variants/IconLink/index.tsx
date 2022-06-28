import "./icon-link.scss";
import { FC, ReactNode } from "react";
import { Link, LinkProps } from 'react-router-dom';
import { joinClassStrings } from "../../../../utils";

export interface IconLinkProps extends LinkProps {
  icon?: ReactNode;
}


const IconLink: FC<IconLinkProps> = ({ icon, ...props }) => {
  const className = props.className || "";
  const classString = joinClassStrings("see-through", className);

  return (
    <Link { ...props } className={ `button-icon link-icon ${classString}` } children={ icon } />
  );
};


export {
  IconLink as default
};