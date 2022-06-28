import { ReactNode } from "react";
import { TextSize, TextColor } from "../../../types";

export interface HeaderProps {
  showFullStop?: boolean;
  coloredText?: string;
  className?: string;
  id?: string;

  children?: ReactNode;
  color?: TextColor;
  size?: TextSize;
  text?: string;
}
