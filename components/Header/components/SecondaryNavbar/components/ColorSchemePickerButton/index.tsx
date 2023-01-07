import { FC } from "react";
import Button from "../../../../../Button";
import { TbColorSwatch } from 'react-icons/tb';

export interface ColorSchemePickerButtonProps {
  onClick?: VoidFunction;
}

const ColorSchemePickerButton: FC<ColorSchemePickerButtonProps> = (props) => (
  <Button.Icon
    icon={ <TbColorSwatch /> }
    title={ "select color scheme" }
    onClick={ props.onClick }
  />
);

export {
  ColorSchemePickerButton as default
};