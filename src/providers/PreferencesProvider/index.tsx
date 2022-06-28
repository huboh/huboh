import * as react from 'react';
import * as utils from './utils';
import * as types from './types';
import * as constants from '../../constants';


const PreferencesContext = react.createContext(utils.initialState);


const PreferencesProvider: react.FC<types.PreferencesProviderProps> = ({ children }) => {
  const preferencesKey = constants.preferencesKey;
  const userPreferences: types.Preferences = JSON.parse(localStorage.getItem(preferencesKey)!);

  const [preferences, setPreferences] = react.useState(userPreferences || utils.initialState);
  const updatePreferences = react.useCallback(utils.getUpdatePreferences(setPreferences), [setPreferences]);

  react.useEffect(() => {
    (document.querySelector("body")!).dataset.theme = preferences.theme;

    localStorage.setItem(preferencesKey, JSON.stringify(preferences));
  });

  return (
    <PreferencesContext.Provider value={ { ...preferences, updatePreferences } }>
      { children }
    </PreferencesContext.Provider>
  );
};


export {
  PreferencesProvider as default,
  PreferencesContext
};