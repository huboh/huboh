import "./link.scss";

import { FC } from "react";
import * as RouterLink from 'react-router-dom';
import { joinClassStrings } from "../../../../utils";

export interface LinkProps extends RouterLink.LinkProps {
  className?: string;
  text: string;
}


const Link: FC<LinkProps> = ({ children, text, className, ...props }) => {
  const classString = joinClassStrings(className || "");

  return (
    <RouterLink.Link { ...props } className={ `link ${classString}` } children={ text || children } />
  );
};


export {
  Link as default
};