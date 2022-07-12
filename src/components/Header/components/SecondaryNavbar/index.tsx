import "./styles/secondary-navbar.scss";
import { FC } from "react";

// hooks
import usePopupMenu from "../../../../hooks/usePopupMenu";

import DownLoadResume from "../../../DownLoadResume";
import MenuToggleButton from "./components/MenuToggleButton";
import ThemeSwitcherButton from "./components/ThemeSwitcherButton";
import ColorSchemePickerButton from "./components/ColorSchemePickerButton";

interface SecondaryNavProps {
  isMobile?: boolean;
}


const SecondaryNavbar: FC<SecondaryNavProps> = (props) => {
  const { isMobile } = props;
  const { toggleSidebarMenu, toggleThemePickerMenu, toggleColorSchemePickerMenu } = usePopupMenu();

  return (
    <div className="navbar-wrapper">
      <ColorSchemePickerButton onClick={ toggleColorSchemePickerMenu } />
      <ThemeSwitcherButton onClick={ toggleThemePickerMenu } />
      { isMobile ? <MenuToggleButton onClick={ toggleSidebarMenu } /> : <DownLoadResume /> }
    </div>
  );
};


export {
  SecondaryNavbar as default
};