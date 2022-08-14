import { RefObject } from 'react';

export type Target = EventTarget;
export type EventType = keyof WindowEventMap;
export type EventHandler<T extends Target, U extends Event> = (this: T, e: U) => void;
export type ListenerType = 'addEventListener' | 'removeEventListener';

export type Listener = (t: EventType, h: EventHandler<any, any>, o?: EventListenerOptions) => void;
export type GetListener = (t: Target, l: ListenerType) => Listener;
export type UseEventListener = <T extends Event, U extends Target = Target>(props: UseEventListenerProps<U, T>) => void;

export type GetTarget<T extends Target> = T extends HTMLElement ? RefObject<T> : T;

export interface UseEventListenerProps<T extends Target, U extends Event> {
  target: GetTarget<T>;
  eventType: EventType | EventType[];
  eventOptions?: EventListenerOptions;
  eventHandler: EventHandler<GetTarget<T>, U>;
}