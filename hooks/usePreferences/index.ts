import { useContext } from "react";
import { PreferencesContext } from "../../providers/PreferencesProvider";

export const usePreferences = () => useContext(PreferencesContext);

export {
  usePreferences as default
};