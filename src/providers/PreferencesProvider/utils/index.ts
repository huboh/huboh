import * as types from '../types';
import * as constants from "../../../constants";

export const initialState: types.Preferences = {
  theme: constants.DefaultTheme,
};

export const getUpdatePreferences = (setter: types.PreferencesSetter) => (
  (preferences: Partial<types.Preferences>) => {
    // removing undefined values
    const updatedPreferences = JSON.parse(JSON.stringify(preferences));

    if ("theme" in updatedPreferences) {
      constants.Themes.includes(updatedPreferences.theme) && setter(currState => ({
        ...currState,
        ...updatedPreferences
      }));
    }
  }
);