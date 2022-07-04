import "./scroll-to-top.scss";

import { FC } from "react";
import { BiArrowToTop } from "react-icons/bi";
import { AnimatePresence, motion, Variant } from 'framer-motion';

// hooks
import useWindowScrollInfo from "../../hooks/useWindowScrollInfo";


const lifeCycleTransitions: Record<any, Variant> = {
  exit: { y: 50, opacity: 0 },
  enter: { y: 0, opacity: 1 },
  initial: { y: 50, opacity: 0 },
};


const ScrollToTop: FC = () => {
  const { isScrolledUp } = useWindowScrollInfo();

  const onButtonClick = () => window.scrollTo({
    behavior: 'smooth',
    top: 0
  });

  const buttonProps = {
    variants: lifeCycleTransitions,
    className: 'scroll-to-top-button',
    initial: "initial",
    animate: "enter",
    exit: "exit",
    title: "scroll to top"
  };

  return (
    <AnimatePresence >
      { !isScrolledUp && <motion.button { ...buttonProps } onClick={ onButtonClick } children={ <BiArrowToTop /> } /> }
    </AnimatePresence >
  );
};


export {
  ScrollToTop as default
};