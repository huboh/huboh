import "../../styles/logo.scss";

import { FC } from "react";
import { joinClassStrings } from "../../../../utils";

// @ts-ignore
import logo from "../../images/logo.png";

export interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  const classString = joinClassStrings("logo-wrapper", (className || ''));

  return (
    <div className={ classString }>
      <img className="logo" alt="logo" src={ logo } />
    </div>
  );
};

export {
  Logo as default
};