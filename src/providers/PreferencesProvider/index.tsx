import { createContext, FC, useCallback, useEffect, useState } from 'react';
import { Preferences, PreferencesProviderProps } from './types';
import { getUpdatePreferences, initialState } from './utils';
import { preferencesKey, themes } from '../../constants/';

import useEventListener from '../../hooks/useEventListener';


const PreferencesContext = createContext(initialState);


const PreferencesProvider: FC<PreferencesProviderProps> = ({ children }) => {
  const userPreferences: Preferences = JSON.parse(localStorage.getItem(preferencesKey)!);
  const [preferences, setPreferences] = useState(userPreferences || initialState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updatePreferences = useCallback(getUpdatePreferences(setPreferences), [setPreferences]);

  useEffect(() => {
    (document.querySelector("body")!).dataset.theme = preferences.theme;
    localStorage.setItem(preferencesKey, JSON.stringify(preferences));
  });

  useEventListener({
    target: window,
    eventType: 'storage',
    eventHandler: (e) => {
      const event = e as StorageEvent;
      if (event.key !== preferencesKey) return;

      const { theme }: Preferences = JSON.parse(event.newValue!);
      themes.includes(theme) && updatePreferences({ theme });
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