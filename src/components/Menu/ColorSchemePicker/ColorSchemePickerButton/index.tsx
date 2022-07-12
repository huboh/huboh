import "./color-scheme-picker-button.scss";

import { FC, useRef, useEffect } from "react";
import { joinClassStrings } from "../../../../utils";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

export interface ColorSchemePickerButtonProps {
  colorScheme: string;
  isSelected?: boolean;
  onClick: VoidFunction;
}

const ColorSchemePickerButton: FC<ColorSchemePickerButtonProps> = ({ colorScheme, isSelected, onClick }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const activeClass = isSelected ? "active" : "";
  const classString = joinClassStrings("color-scheme-picker-button", activeClass);

  useEffect(() => {
    (buttonRef.current!).style.setProperty(`--scheme-color`, `var(--color-scheme-${colorScheme})`);
  },
    [colorScheme]
  );

  return (
    <button className={ classString } onClick={ onClick } ref={ buttonRef }>
      <span>{ colorScheme }</span>
      <span className="icon-wrapper">{ isSelected ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked /> }</span>
    </button>
  );
};

export {
  ColorSchemePickerButton as default
};