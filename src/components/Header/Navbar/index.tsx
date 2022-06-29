import "./navbar.scss";
import { FC } from "react";

// hooks
import usePopupMenu from "../../../hooks/usePopupMenu";

import DownLoadResume from "../../DownLoadResume";
import MenuToggleButton from "./components/MenuToggleButton";
import ThemeSwitcherButton from "./components/ThemeSwitcherButton";


const Navbar: FC = () => {
  const { toggleSidebarMenu, toggleThemePickerMenu } = usePopupMenu();

  return (
    <nav className="navbar-wrapper">
      <DownLoadResume />
      <ThemeSwitcherButton onClick={ toggleThemePickerMenu } />
      <MenuToggleButton onClick={ toggleSidebarMenu } />
    </nav>
  );
};


export {
  Navbar as default
};