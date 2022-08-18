/* eslint-disable react-hooks/exhaustive-deps */
import { PreferencesKey } from '../../constants/';
import { useEventListener } from '../../hooks/useEventListener';
import { FC, useCallback, useEffect, useState } from 'react';
import { Preferences, PreferencesProviderProps } from './types';
import { getUpdatePreferences, getUpdateTheme, getUpdateColorScheme, initialState, PreferencesContext } from './utils';


const PreferencesProvider: FC<PreferencesProviderProps> = ({ children }) => {
  const storedValue = JSON.parse(localStorage.getItem(PreferencesKey) || "{}");
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
      if (event.key === PreferencesKey) {
        updatePreferences(JSON.parse(event.newValue || "{}"));
      };
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