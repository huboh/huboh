/* eslint-disable react-hooks/exhaustive-deps */
import { PreferencesKey } from '../../constants/';
import { Preferences, PreferencesProviderProps } from './types';
import { createContext, FC, useCallback, useEffect, useState } from 'react';
import { getUpdatePreferences, getUpdateTheme, getUpdateColorScheme, initialState } from './utils';

// hooks
import useEventListener from '../../hooks/useEventListener';


const PreferencesContext = createContext(initialState);


const PreferencesProvider: FC<PreferencesProviderProps> = ({ children }) => {
  const storedValue = JSON.parse(localStorage.getItem(PreferencesKey)!);
  const userPreferences: Preferences = { ...initialState, ...(storedValue ?? {}) };
  const [preferences, setPreferences] = useState(userPreferences);

  const updateTheme = useCallback(getUpdateTheme(setPreferences), [setPreferences]);
  const updateColorScheme = useCallback(getUpdateColorScheme(setPreferences), [setPreferences]);
  const updatePreferences = useCallback(getUpdatePreferences(setPreferences), [setPreferences]);

  useEffect(() => {
    (document.querySelector("body")!).dataset.theme = preferences.theme;
    (document.querySelector("body")!).dataset.colorScheme = preferences.colorScheme;

    localStorage.setItem(PreferencesKey, JSON.stringify(preferences));
  });

  useEventListener({
    target: window,
    eventType: 'storage',
    eventHandler: (event) => {
      if ((event as StorageEvent).key !== PreferencesKey) {
        return;
      };

      const newValue = (event as StorageEvent).newValue!;
      const preferences: Preferences = JSON.parse(newValue);

      updatePreferences(preferences);
    }
  });

  return (
    <PreferencesContext.Provider value={ { ...preferences, updateTheme, updateColorScheme, updatePreferences } }>
      { children }
    </PreferencesContext.Provider>
  );
};


export {
  PreferencesProvider as default,
  PreferencesContext
};