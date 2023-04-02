import "../styles/main.scss";

import React from "react";
import { AppType } from "next/app";
import { Toaster } from "react-hot-toast";
import { Poppins } from "@next/font/google";
import { StrictMode } from "react";

// hooks
import useClassString from "../hooks/useClassString";

// components
import AppProviders from "../providers";
import ErrorBoundary from "../components/ErrorBoundary";

// suppress useLayoutEffect warnings when running outside a browser
if (typeof window === "undefined") React.useLayoutEffect = React.useEffect;

const poppins = Poppins({
  preload: true,
  display: "swap",
  subsets: [
    "latin"
  ],
  weight: [
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
  fallback: [
    "Roboto",
    "Oxygen",
    "Ubuntu"
  ]
});

const App: AppType = (props) => {
  const Component = props.Component;
  const pageProps = props.pageProps;
  const className = useClassString(poppins.className);

  return (
    <StrictMode>
      <ErrorBoundary>
        <AppProviders>
          <Component { ...{ ...pageProps, className } } />
          <Toaster position={ "bottom-center" } containerClassName={ className } />
        </AppProviders>
      </ErrorBoundary>
    </StrictMode>
  );
};

export {
  App as default
};