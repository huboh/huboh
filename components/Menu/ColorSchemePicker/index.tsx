import { FC } from "react";
import { ColorSchemes } from "../../../constants";

// hooks
import usePreferences from "../../../hooks/usePreferences";

// component
import SidebarPopup from "../../SidebarPopup";
import SidebarPopupList from "../../SidebarPopup/components/SidebarPopupList";
import SidebarPopupHeader from "../../SidebarPopup/components/SidebarPopupHeader";
import ColorSchemePickerButton from "./ColorSchemePickerButton";

export interface ColorSchemePickerMenuProps {
  openColorSchemeMenu: boolean;
  onOverlayClick?: VoidFunction;
}

const ColorSchemePickerMenu: FC<ColorSchemePickerMenuProps> = ({ openColorSchemeMenu, onOverlayClick }) => {
  const preferences = usePreferences();
  const updateColorScheme = preferences.updateColorScheme;

  return (
    <SidebarPopup onOverlayClick={ onOverlayClick } openSidebarPopup={ openColorSchemeMenu }>
      <SidebarPopupHeader
        title={ "select color scheme" }
      />
      <SidebarPopupList
        items={ ColorSchemes }
        component={ (colorScheme) => (
          <ColorSchemePickerButton
            colorScheme={ colorScheme } onClick={ () => updateColorScheme?.(colorScheme) } isSelected={ colorScheme === preferences.colorScheme }
          />
        ) }
      />
    </SidebarPopup>
  );
};

export {
  ColorSchemePickerMenu as default
};