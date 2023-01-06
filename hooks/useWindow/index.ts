import { useState, useLayoutEffect } from "react";

/**
 * this hook provides a `SSR` friendly way to reference the `Window` object
 */
export const useWindow = () => {
  const [_window_, setWindow] = useState<typeof window | null>(null);

  useLayoutEffect(() => {
    setWindow(window);
  }, []);

  return _window_;
};

export {
  useWindow as default
};