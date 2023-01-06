import { useEffect, useState } from "react";

/**
 * this hook provides a `SSR` friendly way to reference the `Window` object
 */
export const useWindow = () => {
  const [_window_, setWindow] = useState<typeof window | null>(null);

  useEffect(() => {
    setWindow(window);
  }, []);

  return _window_;
};

export {
  useWindow as default
};