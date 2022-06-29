import "./styles/popup-menu.scss";
import * as react from 'react';
import * as utils from './utils';
import * as types from './types';
import * as Menu from "../../components/Menu";


const PopupMenuContext = react.createContext(utils.initialState);


const PopupMenuProvider: react.FC<types.PopupMenuProps> = ({ children }) => {
  const [isSidebarMenuOpen, setSidebarMenuOpen] = react.useState(false);
  const [isThemePickerMenuOpen, setThemePickerMenuOpen] = react.useState(false);

  const toggleSidebarMenu = () => setSidebarMenuOpen(s => !s);
  const toggleThemePickerMenu = () => setThemePickerMenuOpen(s => !s);

  return (
    <PopupMenuContext.Provider value={ { toggleSidebarMenu, toggleThemePickerMenu } }>
      <div className="header-popups-wrapper">
        <Menu.SidebarMenu openSidebarMenu={ isSidebarMenuOpen } onOverlayClick={ toggleSidebarMenu } />
        <Menu.ThemePickerMenu openThemePickerMenu={ isThemePickerMenuOpen } onOverlayClick={ toggleThemePickerMenu } />
      </div>

      { children }
    </PopupMenuContext.Provider>
  );
};


export {
  PopupMenuProvider as default,
  PopupMenuContext
};