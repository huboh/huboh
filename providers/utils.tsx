import type { FC, PropsWithChildren } from "react";

export const combineProviders = (providers: FC<PropsWithChildren>[]) => {
  return providers.reduce(
    (Providers, Provider) => function AppProviders({ children }) {
      return (
        <Providers>
          <Provider>
            { children }
          </Provider>
        </Providers>
      );
    }
  );
};