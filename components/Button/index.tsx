import { ButtonStyle } from "./types";
import { BiLoaderCircle } from 'react-icons/bi';
import { ReactNode, ButtonHTMLAttributes } from "react";

// styles
import styles from "./styles/button.module.scss";

// hooks
import { useState } from "react";
import { useClassString } from "../../hooks";

// components
import Icon from "./variants/Icon";
import IconLink from "./variants/IconLink";
import ButtonLink from "./variants/ButtonLink";
import ButtonExternalLink from "./variants/ButtonExternalLink";
import ButtonExternalIconLink from "./variants/ButtonExternalIconLink";

export interface ButtonProps {
  icon?: ReactNode;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  label?: string;
  style?: ButtonStyle;
  onClick?: () => any;
  disabled?: boolean;
  className?: string;
  showSpinner?: boolean;
}

export default function Button(props: ButtonProps) {
  const type = props.type || 'button';
  const [isDisabled, setIsDisabled] = useState(props.disabled);
  const className = useClassString(styles["button"], props.style, props.className);

  const onClickHandler = async () => {
    if (props.onClick) {
      try {
        setIsDisabled(true);
        await props.onClick();
      } finally {
        setIsDisabled(false);
      }
    };
  };

  return (
    <button type={ type } className={ className } onClick={ onClickHandler } disabled={ props.onClick ? isDisabled : props.disabled }>
      { props.showSpinner ?
        <BiLoaderCircle className={ styles["button-spinner"] } /> : (
          <>
            { props.icon && <span className={ styles["icon-wrapper"] }>{ props.icon }</span> }
            { props.label && <span className={ styles["text-wrapper"] }>{ props.label }</span> }
          </>
        ) }
    </button>
  );
}

Button.Icon = Icon;
Button.Link = ButtonLink;
Button.IconLink = IconLink;
Button.ExternalLink = ButtonExternalLink;
Button.ExternalIconLink = ButtonExternalIconLink;