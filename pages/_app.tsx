import "../styles/main.scss";

import React from "react";
import { AppType } from "next/app";
import { Toaster } from "react-hot-toast";
import { Poppins } from "@next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { StrictMode } from "react";

// hooks
import useClassString from "../hooks/useClassString";

// components
import AppProviders from "../providers";
import ErrorBoundary from "../components/ErrorBoundary";

// suppress useLayoutEffect warnings when running outside a browser
if (typeof window === "undefined") React.useLayoutEffect = React.useEffect;

const Days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

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

  console.log(`%cLook at you snooping around 👀. Have a nice ${Days[new Date().getDay()]} btw 🚀.`, "font-size: 1.2rem; font-weight: 900;");

  return (
    <StrictMode>
      <ErrorBoundary>
        <AppProviders>
          <Component { ...{ ...pageProps, className } } />
          <Toaster position={ "bottom-center" } containerClassName={ className } />
          <Analytics />
        </AppProviders>
      </ErrorBoundary>
    </StrictMode>
  );
};

export {
  App as default
};