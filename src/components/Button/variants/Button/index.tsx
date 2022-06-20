import "./button.scss";
import { BiLoaderCircle } from 'react-icons/bi';
import { FC, useState, ReactNode, ButtonHTMLAttributes } from "react";

export type ButtonStyle = 'opaque' | 'transparent' | 'see-through';

export interface ButtonProps {
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  style?: ButtonStyle;
  label?: string;
  icon?: ReactNode;
  disabled?: boolean;
  showSpinner?: boolean;
  className?: string;
  onClick?: () => any;
}


const Button: FC<ButtonProps> = (props) => {
  let [isDisabled, setIsDisabled] = useState(props.disabled);

  // ? if no onClick handler is given there is no way for the state to change, so we default to the passed in `disabled` props
  isDisabled = props.onClick ? isDisabled : props.disabled;

  const type = props.type || 'button';
  const className = `${props.style || ''} ${props.className || ''}`.trim();

  // handler
  const onClickHandler = async () => {
    if (!props.onClick) return;

    try {
      setIsDisabled(true);
      await props.onClick?.();

    } catch { } finally {
      setIsDisabled(false);
    }
  };

  return (
    <button className={ `button ${className}`.trim() } onClick={ onClickHandler } type={ type } disabled={ isDisabled } >
      { props.showSpinner ? <BiLoaderCircle className="button-spinner" /> : (
        <>
          { props.icon && <span className="icon-wrapper">{ props.icon }</span> }
          { props.label && <span className="text-wrapper">{ props.label }</span> }
        </>
      ) }
    </button>
  );
};


export {
  Button as default
};