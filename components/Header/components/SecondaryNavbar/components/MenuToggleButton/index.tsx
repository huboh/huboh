import { FC } from "react";
import Button from "../../../../../Button";
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

export interface MenuToggleButtonProps {
  onClick?: VoidFunction;
}

const MenuToggleButton: FC<MenuToggleButtonProps> = (props) => (
  <Button.Icon
    icon={ <HiOutlineMenuAlt3 /> }
    title={ "toggle menu" }
    onClick={ props.onClick }
  />
);

export {
  MenuToggleButton as default
};