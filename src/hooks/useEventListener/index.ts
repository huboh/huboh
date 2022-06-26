import { useEffect, RefObject } from 'react';

type Event = keyof WindowEventMap;
type Target = EventTarget;
type ListenerType = Extract<keyof Target, 'addEventListener' | 'removeEventListener'>;

interface UseEventListenerProps<T extends Target> {
  eventType: Event | Event[];
  eventHandler: EventListener;
  eventOptions?: EventListenerOptions;
  target: T extends HTMLElement ? RefObject<T> : T;
}

/**
 * Gets the event listener type on the provided target
 * @param target target on which to attach the event listener
 * @param listenerType type of listener either `addEventListener` or `removeEventListener`
 * @returns a function that when called adds or remove the listener type on the target
 */
const getListener = (target: Target, listenerType: ListenerType) => (
  (type: Event, listener: EventListener, options?: EventListenerOptions) => {
    target[listenerType](type, listener, options);
  }
);

const useEventListener = <T extends Target>(props: UseEventListenerProps<T>) => {
  const { target, eventType, eventHandler, eventOptions } = props;

  useEffect(() => {
    if (!target) return;

    const eventTarget: Target = (target as any).current! ?? target;
    const attachListener = getListener(eventTarget, 'addEventListener');
    const removeListener = getListener(eventTarget, 'removeEventListener');

    !Array.isArray(eventType)
      ? attachListener(eventType, eventHandler, eventOptions)
      : eventType.forEach(event => attachListener(event, eventHandler, eventOptions));

    return () => {
      !Array.isArray(eventType)
        ? removeListener(eventType, eventHandler, eventOptions)
        : eventType.forEach(event => removeListener(event, eventHandler, eventOptions));
    };

  }, [target, eventType, eventHandler, eventOptions]);
};

export default useEventListener;