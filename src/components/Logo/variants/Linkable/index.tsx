import "../../styles/logo.scss";

import { FC } from "react";
import { Link } from 'react-router-dom';
import { HOME } from "../../../../constants/routes";
import { joinClassStrings } from "../../../../utils";

import LogoComponent from "../Logo";

export interface LogoProps {
  className?: string;
  redirectLink?: string;
}

const Logo: FC<LogoProps> = ({ redirectLink, className }) => {
  const classString = joinClassStrings("logo-link-wrapper", (className || ""));

  return (
    <Link to={ redirectLink || HOME } className={ classString }>
      <LogoComponent />
    </Link>
  );
};

export {
  Logo as default
};