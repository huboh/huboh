import styles from "../../styles/icon-link.module.scss";
import iconButtonStyles from "../../styles/icon-button.module.scss";

import { FC, ReactNode } from "react";
import { LinkProps } from 'react-router-dom';
import { useClassString } from "../../../../hooks";

export interface IconExternalLinkProps extends LinkProps {
  to: string;
  icon?: ReactNode;
  title?: string;
}

const IconExternalLink: FC<IconExternalLinkProps> = ({ icon, ...props }) => {
  const style = styles["see_through"];
  const className = useClassString(iconButtonStyles.button_icon, styles.link_icon, style, props.className);

  return (
    <a { ...props } href={ props.to } target={ "_blank" } rel={ "noreferrer" } children={ icon } className={ className } />
  );
};

export {
  IconExternalLink as default
};