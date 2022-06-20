import "./navbar.scss";
import { FC } from "react";

import DownLoadResume from "../../DownLoadResume";
import MenuToggleButton from "./components/MenuToggleButton";
import ThemeSwitcherButton from "./components/ThemeSwitcherButton";


const Navbar: FC = () => (
  <nav className="navbar-wrapper">
    <DownLoadResume />
    <ThemeSwitcherButton />
    <MenuToggleButton />
  </nav>
);


export {
  Navbar as default
};