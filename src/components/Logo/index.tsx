import "./logo.scss";
import { FC } from "react";
import { Link } from 'react-router-dom';

// @ts-ignore
import logo from "./logo.png";
import * as routes from "../../constants/routes";

export interface LogoProps {
  className?: string;
  redirectLink?: string;
}


const Logo: FC<LogoProps> = ({ redirectLink, className }) => (
  <Link to={ redirectLink || routes.HOME } className={ `logo-wrapper ${className || ''}`.trim() }>
    <img className="logo" alt="logo" src={ logo } />
  </Link>
);


export {
  Logo as default
};