import { FC } from "react";
import { Themes } from "../../../constants";

// hooks
import usePreferences from "../../../hooks/usePreferences";

// component
import SidebarPopup from "../../SidebarPopup";
import SidebarPopupList from "../../SidebarPopup/components/SidebarPopupList";
import SidebarPopupHeader from "../../SidebarPopup/components/SidebarPopupHeader";
import ThemePickerButton from "./ThemePickerButton";

export interface ThemePickerMenuProps {
  openThemePickerMenu: boolean;
  onOverlayClick?: VoidFunction;
}


const ThemePickerMenu: FC<ThemePickerMenuProps> = ({ openThemePickerMenu, onOverlayClick }) => {
  const { theme: currentTheme, updatePreferences } = usePreferences();

  const render = (theme: typeof currentTheme) => (
    <ThemePickerButton
      theme={ theme }
      isChecked={ theme === currentTheme }
      onClick={ () => updatePreferences?.({ theme }) }
    />
  );

  return (
    <SidebarPopup onOverlayClick={ onOverlayClick } openSidebarPopup={ openThemePickerMenu }>
      <SidebarPopupHeader title="select theme" />
      <SidebarPopupList listItems={ Themes } render={ render } />
    </SidebarPopup>
  );
};


export {
  ThemePickerMenu as default
};