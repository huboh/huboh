import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

const BrowserRouterProvider: FC<any> = ({ children }) => (
  <BrowserRouter>
    { children }
  </BrowserRouter>
);

export {
  BrowserRouterProvider as default
};