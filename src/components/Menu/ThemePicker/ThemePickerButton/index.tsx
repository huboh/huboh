import "./themepicker-button.scss";

import { FC } from "react";
import { joinClassStrings } from "../../../../utils";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

export interface ThemePickerButtonProps {
  theme: string;
  isChecked?: boolean;
  onClick: VoidFunction;
}


const ThemePickerButton: FC<ThemePickerButtonProps> = ({ theme, isChecked, onClick }) => {
  const activeClass = isChecked ? "active" : "";
  const classString = joinClassStrings("theme-picker-button", activeClass);

  return (
    <button className={ classString } onClick={ onClick }>
      <span>{ theme }</span>
      <span className="icon-wrapper">{ isChecked ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked /> }</span>
    </button>
  );
};


export {
  ThemePickerButton as default
};