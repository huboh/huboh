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
  const preferences = usePreferences();
  const updateThemeFunc = preferences.updateTheme;

  return (
    <SidebarPopup onOverlayClick={ onOverlayClick } openSidebarPopup={ openThemePickerMenu }>
      <SidebarPopupHeader
        title={ "select theme" }
      />
      <SidebarPopupList
        items={ Themes }
        component={ (theme) => (
          <ThemePickerButton theme={ theme } onClick={ () => updateThemeFunc?.(theme) } isChecked={ theme === preferences.theme } />
        ) }
      />
    </SidebarPopup>
  );
};

export {
  ThemePickerMenu as default
};