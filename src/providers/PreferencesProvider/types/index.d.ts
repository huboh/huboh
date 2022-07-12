import { ReactNode, Dispatch, SetStateAction } from "react";

export type Theme = "light" | "dark" | "system";

export type ColorScheme = "red" | "orange" | "yellow" | "green" | "blue" | "pink" | "gold";

export type PreferencesSetter = Dispatch<SetStateAction<Preferences>>;

export interface PreferencesProviderProps {
  children: ReactNode;
}

export interface Preferences {
  theme: Theme;
  colorScheme: ColorScheme;
  updateTheme?: (theme: Theme) => void;
  updateColorScheme?: (colorScheme: ColorScheme) => void;
  updatePreferences?: (preferences: Partial<Preferences>) => void;
}