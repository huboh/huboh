import styles from "./styles/popup-menu.module.scss";

import { initialState } from './utils';
import { PopupMenuProps } from './types';
import { createContext, FC, useState, useMemo } from 'react';
import { Sidebar, ThemePicker, ColorSchemePicker } from "../../components/Menu";

const PopupMenuContext = createContext(initialState);
const PopupMenuProvider: FC<PopupMenuProps> = (props) => {
  // TODO: refactor out multiple states
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isThemePickerOpen, setThemePickerOpen] = useState(false);
  const [isColorSchemePickerOpen, setColorSchemePickerOpen] = useState(false);

  const context = useMemo(() => ({
    toggleSidebar: () => setSidebarOpen(s => !s),
    toggleThemePicker: () => setThemePickerOpen(s => !s),
    toggleColorSchemePicker: () => setColorSchemePickerOpen(s => !s),
  }),
    []
  );

  return (
    <PopupMenuContext.Provider value={ context }>
      <div className={ styles.header_popups }>
        <Sidebar openSidebarMenu={ isSidebarOpen } onOverlayClick={ context.toggleSidebar } />
        <ThemePicker openThemePickerMenu={ isThemePickerOpen } onOverlayClick={ context.toggleThemePicker } />
        <ColorSchemePicker openColorSchemeMenu={ isColorSchemePickerOpen } onOverlayClick={ context.toggleColorSchemePicker } />
      </div>
      { props.children }
    </PopupMenuContext.Provider>
  );
};

export {
  PopupMenuContext,
  PopupMenuProvider as default
};