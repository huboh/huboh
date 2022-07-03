import { ReactNode, MouseEvent } from "react";

export interface ModalProps {
  isOpen: boolean;
  className?: string;
  children: ReactNode;
  modalContent?: JSX.Element;

  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}