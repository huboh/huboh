import styles from "./themepicker-button.module.scss";

import { FC } from "react";
import { useClassString } from "../../../../hooks";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

export interface ThemePickerButtonProps {
  theme: string;
  isChecked?: boolean;
  onClick: VoidFunction;
}

const ThemePickerButton: FC<ThemePickerButtonProps> = ({ theme, isChecked, onClick }) => {
  const activeClass = isChecked ? styles.active : "";
  const classString = useClassString(styles.theme_picker_button, activeClass);

  return (
    <button className={ classString } onClick={ onClick }>
      <span children={ theme } />
      <span children={ isChecked ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked /> } className={ styles.icon_wrapper } />
    </button>
  );
};

export {
  ThemePickerButton as default
};