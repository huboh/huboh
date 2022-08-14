import { GetListener } from "../types";

/**
 * gets the event target from a possible react ref object
 * @param target either a react ref object that points to an HTML element or any object that can receive events and may have listeners for them.
 * @returns the event target
 */
export const getTarget = (target: any) => "current" in target ? target.current : target;

/**
 * gets the event listener function on the provided target
 * @param target target on which to attach the event listener
 * @param listenerType type of listener either `addEventListener` or `removeEventListener`
 * @returns a function that when called adds or remove the listener type on the target
 */
export const getListener: GetListener = (target, listenerType) => (type, listener, options) => {
  target[listenerType](type, listener, options);
};