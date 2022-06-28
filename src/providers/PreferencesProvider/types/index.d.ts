import { ReactNode, Dispatch, SetStateAction } from "react";

export type PreferencesSetter = Dispatch<SetStateAction<Preferences>>;

export interface PreferencesProviderProps {
  children: ReactNode;
}

export interface Preferences {
  theme: "light" | "dark" | "system";
  updatePreferences?: (preferences: Partial<Preferences>) => void;
}