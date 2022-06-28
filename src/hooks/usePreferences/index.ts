import { useContext } from "react";
import { PreferencesContext } from "../../providers/PreferencesProvider";

const usePreferences = () => useContext(PreferencesContext);

export default usePreferences;