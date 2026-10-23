import { useEffect, useRef } from "react";
import { UseEventListener } from "./types";
import { GetTarget, GetListener } from "./types";

/**
 * Accepts an `EventTarget` object or a `React.RefObject<EventTarget>` & returns the event target object.
 * @param target a union of `EventTarget` | `React.RefObject<EventTarget>`,
 * @returns the event target
 */
const getTarget: GetTarget = (target: any) => target?.current ?? target;

/**
 * Gets the event listener function on the provided target
 * @param target target on which to attach the event listener
 * @param listenerType type of listener either `addEventListener` or `removeEventListener`
 * @returns a function that when called adds or remove the listener type on the target
 */
const getListener: GetListener = (target, listenerType) => (type, handler, options) => {
  target?.[listenerType]?.(type, handler, options);
};

/**
 * Custom hook that adds event listeners to a target element and automatically cleans them up
 *
 * @example
 * // Basic usage with a ref
 * const buttonRef = useRef(null);
 * useEventListener({
 *   target: buttonRef,
 *   eventType: 'click',
 *   eventHandler: (e) => console.log('Button clicked!')
 * });
 * 
 * @example
 * // Multiple events
 * useEventListener({
 *   target: window,
 *   eventType: ['mouseenter', 'mouseleave'],
 *   eventHandler: (e) => console.log(`Mouse ${e.type}`)
 * });
 * 
 * @example
 * // With options
 * useEventListener({
 *   target: window,
 *   eventType: 'scroll',
 *   eventHandler: throttledScrollHandler,
 *   eventOptions: { passive: true }
 * });
 */
const useEventListener: UseEventListener = (props) => {
  const onSetupRef = useRef(props.onSetup);
  const eventHandlerRef = useRef(props.eventHandler);
  const eventOptionsRef = useRef(props.eventOptions);

  useEffect(
    () => {
      onSetupRef.current = props.onSetup;
      eventHandlerRef.current = props.eventHandler;
      eventOptionsRef.current = props.eventOptions;
    },
    [
      props.eventOptions,
      props.eventHandler,
      props.onSetup
    ]
  );

  return useEffect(
    () => {
      const target = getTarget(props.target);
      if (!target) {
        return;
      };

      const type = props.eventType;
      const options = eventOptionsRef.current;
      const handler = eventHandlerRef.current.bind(target);
      const isMultiEvent = Array.isArray(type);
      const attachListener = getListener(target, "addEventListener");
      const removeListener = getListener(target, "removeEventListener");

      if (!isMultiEvent) {
        attachListener(type, handler, options);
      } else {
        type.forEach(
          (event) => {
            attachListener(event, handler, options);
          }
        );
      }

      onSetupRef.current?.(target);

      return () => {
        if (!isMultiEvent) {
          removeListener(type, handler, options);
        } else {
          type.forEach(
            (event) => {
              removeListener(event, handler, options);
            }
          );
        }
      };
    },
    [
      props.eventType,
      props.target,
    ]
  );
};

export {
  useEventListener as default,
  useEventListener
};
