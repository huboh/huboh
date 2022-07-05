import { createContext, FC, useCallback, useEffect, useState } from 'react';
import { Preferences, PreferencesProviderProps } from './types';
import { getUpdatePreferences, initialState } from './utils';
import { PreferencesKey } from '../../constants/';

import useEventListener from '../../hooks/useEventListener';


const PreferencesContext = createContext(initialState);


const PreferencesProvider: FC<PreferencesProviderProps> = ({ children }) => {
  const storedValue = JSON.parse(localStorage.getItem(PreferencesKey)!);
  const userPreferences: Preferences = { ...initialState, ...(storedValue ?? {}) };
  const [preferences, setPreferences] = useState(userPreferences);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updatePreferences = useCallback(getUpdatePreferences(setPreferences), [setPreferences]);

  useEffect(() => {
    (document.querySelector("body")!).dataset.theme = preferences.theme;
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
    <PreferencesContext.Provider value={ { ...preferences, updatePreferences } }>
      { children }
    </PreferencesContext.Provider>
  );
};


export {
  PreferencesProvider as default,
  PreferencesContext
};