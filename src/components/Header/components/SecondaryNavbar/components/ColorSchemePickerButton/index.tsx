import { FC } from "react";
import { TbColorSwatch } from 'react-icons/tb';

import Button from "../../../../../Button";

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