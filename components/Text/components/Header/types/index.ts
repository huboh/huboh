import { HTMLProps, ReactNode } from "react";
import { TextSize, TextColor } from "../../../types";

export interface HeaderProps extends Omit<HTMLProps<HTMLHeadingElement>, "size"> {
  showFullStop?: boolean;
  coloredText?: string;
  className?: string;
  id?: string;

  children?: ReactNode;
  color?: TextColor;
  size?: TextSize;
  text?: string;
}
