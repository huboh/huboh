import styles from "./color-scheme-picker-button.module.scss";

import { useClassString } from "../../../../hooks";
import { FC, useRef, useEffect } from "react";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

export interface ColorSchemePickerButtonProps {
  colorScheme: string;
  isSelected?: boolean;
  onClick: VoidFunction;
}

const ColorSchemePickerButton: FC<ColorSchemePickerButtonProps> = ({ colorScheme, isSelected, onClick }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const activeClass = isSelected ? styles.active : "";
  const classString = useClassString(styles.color_scheme_picker_button, activeClass);

  useEffect(() => {
    (buttonRef.current!).style.setProperty(`--scheme-color`, `var(--color-scheme-${colorScheme})`);
  },
    [colorScheme]
  );

  return (
    <button className={ classString } onClick={ onClick } ref={ buttonRef }>
      <span children={ colorScheme } />
      <span children={ isSelected ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked /> } className={ styles.icon_wrapper } />
    </button>
  );
};

export {
  ColorSchemePickerButton as default
};