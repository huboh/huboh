import { FC, useMemo } from "react";
import { Themes } from "../../../constants";
import { SidebarPopupProps } from "../../SidebarPopup/types";

// hooks
import usePreferences from "../../../hooks/usePreferences";

// component
import SidebarPopup from "../../SidebarPopup";
import ThemePickerButton from "./ThemePickerButton";
import SidebarPopupList from "../../SidebarPopup/components/SidebarPopupList";
import SidebarPopupHeader from "../../SidebarPopup/components/SidebarPopupHeader";

export interface ThemePickerMenuProps extends SidebarPopupProps { }

const ThemePickerMenu: FC<ThemePickerMenuProps> = (props) => {
  const preferences = usePreferences();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const themes = useMemo(() => Themes.map((theme) => ({ theme })), Themes);
  const onClick = (theme: (typeof Themes)[number]) => () => preferences.updateTheme?.(theme);

  return (
    <SidebarPopup { ...props }>
      <SidebarPopupHeader
        title={ "select theme" }
      />
      <SidebarPopupList
        key_="theme"
        items={ themes }
        render={ ({ theme }) => <ThemePickerButton theme={ theme } onClick={ onClick(theme) } isChecked={ theme === preferences.theme } /> }
      />
    </SidebarPopup>
  );
};

export {
  ThemePickerMenu as default
};