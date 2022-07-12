import "../../styles/icon.scss";

import { FC } from "react";
import { joinClassStrings } from "../../../../utils";

// @ts-ignore
import iconSrc from "../../images/icon.png";

export interface IconProps {
  className?: string;
}

const Icon: FC<IconProps> = ({ className }) => {
  const classString = joinClassStrings("logo-icon-wrapper", (className || ''));

  return (
    <div className={ classString }>
      <img className="icon" alt="icon" src={ iconSrc } />
    </div>
  );
};

export {
  Icon as default
};