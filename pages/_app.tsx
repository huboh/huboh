import "../styles/main.scss";

import { AppType } from "next/app";
import { StrictMode } from "react";
import { Poppins, Quicksand } from "@next/font/google";

// hooks
import useClassString from "../hooks/useClassString";

// components
import AppProviders from "../providers";
import ErrorBoundary from "../components/ErrorBoundary";

const poppins = Poppins({ display: "swap", preload: true, weight: ["300", "400", "500", "600", "700", "800", "900"], fallback: ["Roboto", "Oxygen", "Ubuntu",] });
const quicksand = Quicksand({ display: "swap", preload: true, weight: ["300", "400", "500", "600", "700"] });

const App: AppType = (props) => {
  const Component = props.Component;
  const pageProps = props.pageProps;
  const className = useClassString(poppins.className);

  return (
    <StrictMode>
      <ErrorBoundary>
        <AppProviders>
          <Component { ...{ ...pageProps, className } } />
        </AppProviders>
      </ErrorBoundary>
    </StrictMode>
  );
};

export {
  App as default
};