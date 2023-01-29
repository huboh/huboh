import styles from "../../styles/sidebar-popup-footer.module.scss";
import { FC, ReactNode } from "react";
import { useClassString } from "../../../../hooks";

export interface SidebarPopupFooterProps {
  children: ReactNode;
  className?: string;
}

const SidebarPopupFooter: FC<SidebarPopupFooterProps> = (props) => {
  const className = useClassString(styles["sidebar-popup-footer"], props.className);

  return (
    <footer
      className={ className }
      children={ props.children }
    />
  );
};

export {
  SidebarPopupFooter as default
};