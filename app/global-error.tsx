"use client";

import "@/styles/main.scss";

// types
import type { Metadata } from "next";
import type { ErrorPage } from "@/types";

// utils
import { poppins } from "@/fonts";
import { joinClassStrings } from "@/lib";

// components
import View from "@/components/View";
import ErrorScreen from "@/components/ErrorScreen";

const metadata: Metadata = {
  title: "(500) Internal Server Error",
  openGraph: {
    title: "(500) Internal Server Error"
  },
  robots: {
    follow: false,
    index: false
  }
};

const GlobalError: ErrorPage = (props) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning={ true }
    >
      <body className={ joinClassStrings(poppins.className, "antialiased") }>
        <View>
          <ErrorScreen title="(500) Internal Server Error" ctaFunction={ props.reset } />
        </View>
      </body>
    </html>
  );
};

export {
  GlobalError as default,
  metadata
};