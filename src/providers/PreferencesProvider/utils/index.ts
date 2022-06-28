import * as types from '../types';

export const initialState: types.Preferences = {
  theme: 'system',
};

export const getUpdatePreferences = (setter: types.PreferencesSetter) => (
  (preferences: Partial<types.Preferences>) => {
    // removing undefined values
    const updatedPreferences = JSON.parse(JSON.stringify(preferences));

    // TODO: validate preferences values
    setter(currState => ({ ...currState, ...updatedPreferences }));
  }
);