import { FC } from 'react';

// providers
import PopupMenuProvider from './PopupMenuProvider';
import PreferencesProvider from './PreferencesProvider';
import BrowserRouterProvider from './BrowserRouterProvider';


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

const AppProviders = combineProviders([
  BrowserRouterProvider,
  PreferencesProvider,
  PopupMenuProvider,
]);


export {
  AppProviders as default
};