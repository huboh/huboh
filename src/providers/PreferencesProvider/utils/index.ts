import * as types from '../types';
import * as constants from "../../../constants";

export const initialState: types.Preferences = {
  theme: constants.DefaultTheme,
  colorScheme: constants.DefaultColorScheme,
};

export const getUpdateTheme = (setter: types.PreferencesSetter) => (
  (theme: types.Theme) => {
    constants.Themes.includes(theme) && setter(currState => ({
      ...currState, theme
    }));
  }
);

export const getUpdateColorScheme = (setter: types.PreferencesSetter) => (
  (colorScheme: types.ColorScheme) => {
    constants.ColorSchemes.includes(colorScheme) && setter(currState => ({
      ...currState, colorScheme
    }));
  }
);

export const getUpdatePreferences = (setter: types.PreferencesSetter) => (
  (preferences: Partial<Omit<types.Preferences, "updateTheme" | "updateColorScheme" | "updatePreferences">>) => {
    // removing undefined values
    const updatedPreferences = JSON.parse(JSON.stringify(preferences));

    if (
      ("theme" in updatedPreferences && !(constants.Themes.includes(updatedPreferences.theme))) ||
      ("colorScheme" in updatedPreferences && !(constants.ColorSchemes.includes(updatedPreferences.colorScheme)))
    ) {
      return;
    }

    setter(currState => ({
      ...currState,
      ...updatedPreferences
    }));
  }
);