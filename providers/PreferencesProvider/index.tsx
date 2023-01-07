/* eslint-disable react-hooks/exhaustive-deps */
import { FC } from 'react';
import { PreferencesKey } from '../../constants/';
import { PreferencesProviderProps } from './types';
import { getUpdatePreferences, getUpdateTheme, getUpdateColorScheme, initialState, PreferencesContext, getLocalPreferences } from './utils';

// hooks
import { useEventListener, useWindow } from '../../hooks';
import { useCallback, useEffect, useState } from 'react';

const PreferencesProvider: FC<PreferencesProviderProps> = (props) => {
  const _window_ = useWindow();
  const [preferences, setPreferences] = useState({ ...initialState, ...getLocalPreferences(_window_) });

  // context updater functions
  const updateTheme = useCallback(getUpdateTheme(setPreferences), [setPreferences]);
  const updateColorScheme = useCallback(getUpdateColorScheme(setPreferences), [setPreferences]);
  const updatePreferences = useCallback(getUpdatePreferences(setPreferences), [setPreferences]);

  useEffect(() => {
    localStorage.setItem(PreferencesKey, JSON.stringify(preferences));
    (document.querySelector("body")!).dataset.theme = preferences.theme;
    (document.querySelector("body")!).dataset.colorScheme = preferences.colorScheme;
  });

  useEventListener({
    target: _window_!,
    eventType: 'storage',
    eventHandler: (event) => {
      if (event.key === PreferencesKey) {
        updatePreferences(JSON.parse(event.newValue || "{}"));
      };
    }
  });

  return (
    <PreferencesContext.Provider value={ { ...preferences, updateTheme, updateColorScheme, updatePreferences } }>
      { props.children }
    </PreferencesContext.Provider>
  );
};

export {
  PreferencesContext,
  PreferencesProvider as default
};