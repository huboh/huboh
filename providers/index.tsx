import PopupMenuProvider from "./PopupMenuProvider";
import PreferencesProvider from "./PreferencesProvider";
import { combineProviders } from "./utils";


const AppProviders = combineProviders([
  PreferencesProvider,
  PopupMenuProvider,
]);

export {
  AppProviders as default
};