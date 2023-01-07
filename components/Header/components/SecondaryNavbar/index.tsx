import { FC } from "react";

// styles
import styles from "./styles/secondary-navbar.module.scss";

// hooks
import usePopupMenu from "../../../../hooks/usePopupMenu";

// components
import DownLoadResume from "../../../DownLoadResume";
import MenuToggleButton from "./components/MenuToggleButton";
import ThemeSwitcherButton from "./components/ThemeSwitcherButton";
import ColorSchemePickerButton from "./components/ColorSchemePickerButton";

interface SecondaryNavProps {
  isMobile?: boolean;
}

const SecondaryNavbar: FC<SecondaryNavProps> = (props) => {
  const { isMobile } = props;
  const { toggleSidebar, toggleThemePicker, toggleColorSchemePicker } = usePopupMenu();

  return (
    <div className={ styles.navbar_wrapper }>
      <ColorSchemePickerButton onClick={ toggleColorSchemePicker } />
      <ThemeSwitcherButton onClick={ toggleThemePicker } />
      { isMobile ? <MenuToggleButton onClick={ toggleSidebar } /> : <DownLoadResume /> }
    </div>
  );
};

export {
  SecondaryNavbar as default
};