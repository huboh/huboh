import styles from './styles/modal.module.scss';

import { ModalProps } from "./types";
import { useClassString } from '../../hooks';
import { FC, useRef, MouseEvent } from 'react';

const ModalOverlay: FC<ModalProps> = (props) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const classString = useClassString(styles["modal-overlay"], props.className);
  const onClickHandler = (event: MouseEvent<HTMLDivElement>) => {
    (event.target === overlayRef.current) && props.onClick?.(event);
  };

  return !props.isOpen ? null : (
    <div className={ classString } ref={ overlayRef } onClick={ onClickHandler }>
      { props.modalContent ?? props.children }
    </div>
  );
};

export {
  ModalOverlay as default
};