import { FC } from 'react';


const combineProviders = (providers: FC<any>[]) => providers.reduce(
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

const AppProviders = combineProviders([]);


export {
  AppProviders as default
};