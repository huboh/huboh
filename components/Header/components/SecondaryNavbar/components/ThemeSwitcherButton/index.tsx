import { FC } from "react";
import { TbMoon } from 'react-icons/tb';
import Button from "../../../../../Button";

export interface ThemeSwitcherButtonProps {
  onClick?: VoidFunction;
}

const ThemeSwitcherButton: FC<ThemeSwitcherButtonProps> = (props) => (
  <Button.Icon
    icon={ <TbMoon /> }
    title={ "select theme" }
    onClick={ props.onClick }
  />
);

export {
  ThemeSwitcherButton as default
};