import './modal.scss';

import { ModalProps } from "./types";
import { FC, useRef, MouseEvent } from 'react';
import { joinClassStrings } from '../../utils';


const ModalOverlay: FC<ModalProps> = ({ isOpen, ...props }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const classString = joinClassStrings("modal-overlay", props.className || "");

  const onClickHandler = (event: MouseEvent<HTMLDivElement>) => {
    (event.target === overlayRef.current) && props.onClick?.(event);
  };

  return !isOpen ? null : (
    <div className={ classString } ref={ overlayRef } onClick={ onClickHandler }>
      { props.modalContent ?? props.children }
    </div>
  );
};


export {
  ModalOverlay as default
};