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
  const { colorScheme: currentColorScheme, updateColorScheme } = usePreferences();

  const render = (colorScheme: typeof currentColorScheme) => (
    <ColorSchemePickerButton
      colorScheme={ colorScheme }
      isSelected={ colorScheme === currentColorScheme }
      onClick={ () => updateColorScheme?.(colorScheme) }
    />
  );

  return (
    <SidebarPopup onOverlayClick={ onOverlayClick } openSidebarPopup={ openColorSchemeMenu }>
      <SidebarPopupHeader title="select color scheme" />
      <SidebarPopupList listItems={ ColorSchemes } render={ render } />
    </SidebarPopup>
  );
};

export {
  ColorSchemePickerMenu as default
};