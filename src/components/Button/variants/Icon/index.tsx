import "./icon-button.scss";
import { FC, ReactNode, ButtonHTMLAttributes } from "react";

export type ButtonStyle = 'opaque' | 'transparent' | 'see-through';

export interface IconProps {
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  style?: ButtonStyle;
  label?: string;
  icon?: ReactNode;
  className?: string;
  onClick?: () => any;
}


const Icon: FC<IconProps> = (props) => {
  const type = props.type || 'button';
  const className = `${props.style || 'see-through'} ${props.className || ''}`.trim();

  return (
    <button className={ `button-icon ${className}`.trim() } onClick={ props.onClick } type={ type }>
      { props.icon }
    </button>
  );
};


export {
  Icon as default
};