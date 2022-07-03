import "./styles/popup-menu.scss";

import { initialState } from './utils';
import { PopupMenuProps } from './types';
import { createContext, FC, useState } from 'react';
import { Sidebar, ThemePicker } from "../../components/Menu";


const PopupMenuContext = createContext(initialState);


const PopupMenuProvider: FC<PopupMenuProps> = ({ children }) => {
  const [isSidebarMenuOpen, setSidebarMenuOpen] = useState(false);
  const [isThemePickerMenuOpen, setThemePickerMenuOpen] = useState(false);

  const toggleSidebarMenu = () => setSidebarMenuOpen(s => !s);
  const toggleThemePickerMenu = () => setThemePickerMenuOpen(s => !s);

  return (
    <PopupMenuContext.Provider value={ { toggleSidebarMenu, toggleThemePickerMenu } }>
      <div className="header-popups-wrapper">
        < Sidebar openSidebarMenu={ isSidebarMenuOpen } onOverlayClick={ toggleSidebarMenu } />
        < ThemePicker openThemePickerMenu={ isThemePickerMenuOpen } onOverlayClick={ toggleThemePickerMenu } />
      </div>

      { children }
    </PopupMenuContext.Provider>
  );
};


export {
  PopupMenuProvider as default,
  PopupMenuContext
};