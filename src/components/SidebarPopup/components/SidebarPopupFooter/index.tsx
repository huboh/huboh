import "../../styles/sidebar-popup-footer.scss";

import { FC, ReactNode } from "react";
import { joinClassStrings } from "../../../../utils";

export interface SidebarPopupFooterProps {
  children: ReactNode;
  className?: string;
}


const SidebarPopupFooter: FC<SidebarPopupFooterProps> = (props) => {
  const className = props.className || "";
  const classString = joinClassStrings("sidebar-popup-footer", className);

  return (
    <footer
      className={ classString }
      children={ props.children }
    />
  );
};


export {
  SidebarPopupFooter as default
};