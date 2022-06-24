import { ReactNode } from "react";

export type Color = "grey";

export type Size = "small" | "medium" | "large";

export interface HeaderProps {
  children?: ReactNode;
  coloredText?: string;
  className?: string;
  text?: string;
  color?: Color;
  size?: Size;
  id?: string;
}
