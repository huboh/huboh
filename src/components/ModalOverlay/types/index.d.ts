import { ReactNode } from "react";

export interface ModalProps {
  isOpen: boolean;
  className?: string;
  children: ReactNode;
  onClick?: VoidFunction;
  modalContent?: JSX.Element;
}