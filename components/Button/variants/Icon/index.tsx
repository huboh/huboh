import styles from "../../styles/icon-button.module.scss";

import { FC } from "react";
import { ButtonProps } from "../../";
import { useClassString } from "../../../../hooks";

export interface IconProps extends Pick<ButtonProps, "icon" | "type" | "style" | "onClick" | "className"> {
  title?: string;
}

const Icon: FC<IconProps> = (props) => {
  const type = props.type || 'button';
  const style = styles[props.style || "see_through"];
  const className = useClassString(styles.button_icon, style, props.className);

  return (
    <button title={ props.title } onClick={ props.onClick } type={ type } className={ className }>
      { props.icon }
    </button>
  );
};

export {
  Icon as default
};