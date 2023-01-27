import { FC, useMemo } from "react";
import { ColorSchemes } from "../../../constants";
import { SidebarPopupProps } from "../../SidebarPopup/types";

// hooks
import usePreferences from "../../../hooks/usePreferences";

// component
import SidebarPopup from "../../SidebarPopup";
import SidebarPopupList from "../../SidebarPopup/components/SidebarPopupList";
import SidebarPopupHeader from "../../SidebarPopup/components/SidebarPopupHeader";
import ColorSchemePickerButton from "./ColorSchemePickerButton";

export interface ColorSchemePickerMenuProps extends SidebarPopupProps { }

const ColorSchemePickerMenu: FC<ColorSchemePickerMenuProps> = (props) => {
  const preferences = usePreferences();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const schemes = useMemo(() => ColorSchemes.map((scheme) => ({ scheme })), ColorSchemes);
  const onClick = (scheme: (typeof ColorSchemes)[number]) => () => preferences.updateColorScheme?.(scheme);

  return (
    <SidebarPopup { ...props }>
      <SidebarPopupHeader
        title={ "select color scheme" }
      />
      <SidebarPopupList
        key_={ "scheme" }
        items={ schemes }
        render={ ({ scheme }) => <ColorSchemePickerButton colorScheme={ scheme } onClick={ onClick(scheme) } isSelected={ scheme === preferences.colorScheme } /> }
      />
    </SidebarPopup>
  );
};

export {
  ColorSchemePickerMenu as default
};