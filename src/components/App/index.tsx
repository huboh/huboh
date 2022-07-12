import { FC, Suspense } from "react";

import Loader from "../Loader";
import Router from "../Router";
import AppProviders from '../../providers';


const App: FC = () => (
  <AppProviders>
    <Suspense fallback={ <Loader /> }>
      <Router />
    </Suspense>
  </AppProviders>
);


export {
  App as default
};