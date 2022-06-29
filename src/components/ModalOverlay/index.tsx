import './modal.scss';

import { FC, useRef } from 'react';
import { ModalProps } from "./types";
import { joinClassStrings } from '../../utils';

// hooks
import useEventListener from '../../hooks/useEventListener';


const ModalOverlay: FC<ModalProps> = ({ isOpen, modalContent, ...props }) => {
  const className = props.className || "";
  const isActiveClass = isOpen ? "open" : "";
  const classString = joinClassStrings(isActiveClass, className);

  const overlayRef = useRef<HTMLDivElement>(
    null
  );

  useEventListener({
    target: overlayRef,
    eventType: 'click',
    eventHandler: (event) => {
      (event.target === overlayRef.current) && props.onClick?.();
    }
  });

  return (
    <div
      ref={ overlayRef }
      className={ `modal-overlay ${classString}`.trim() }
      children={ isOpen && (modalContent ?? props.children) }
    />
  );
};


export {
  ModalOverlay as default
};