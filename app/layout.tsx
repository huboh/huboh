import "../styles/main.scss";

// types
import type { Layout } from "../types";
import type { Metadata } from "next";

// utils
import { Poppins } from "@next/font/google";
import { joinClassStrings } from "../lib";

// components
import AppProviders from "../providers";
import { Toaster } from "react-hot-toast";
import { Analytics } from '@vercel/analytics/react';
import ClientLogger from "../components/ClientLogger";

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

const metadata: Metadata = {
  manifest: "",
  description: "Welcome to my corner of the internet 👀, Knowledge Musa is a software engineer focused in building user-centered, enterprise ready & cutting edge application. I showcase my skills and share my insights on various technologies through detailed tutorials and informative articles. Join me on this journey of exploration and learning.",
  title: {
    default: "Knowledge Musa",
    template: "%s | Software Engineer Portfolio"
  },
  openGraph: {
    type: "website",
    siteName: "%s | Software Engineer Portfolio",
    description: "",
    title: {
      default: "Knowledge Musa",
      template: "%s | Software Engineer Portfolio"
    },
    images: {
      alt: "knowledge musa's portfolio",
      type: "website",
      width: 1200,
      height: 628,
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/assets/images/siteimage.png`,
      href: `${process.env.NEXT_PUBLIC_DOMAIN}/assets/images/siteimage.png`,
    }
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_DOMAIN
  },
  twitter: {
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE
  },
};

const RootLayout: Layout = (props) => {
  return (
    <html
      dir="ltr"
      lang="en"
    // suppressHydrationWarning={ true }
    >
      <body className={ joinClassStrings(poppins.className, "antialiased") }>
        <AppProviders>
          { props.children }
          {/* <Footer id="footer" /> */ }
          <Toaster position={ "bottom-center" } containerClassName={ poppins.className } />
          <ClientLogger log={ `Look at you snooping around 👀. Have a nice ${Days[new Date().getDay()]} btw 🚀.` } />
          <Analytics />
        </AppProviders>
      </body>
    </html>
  );
};

export {
  RootLayout as default,
  metadata
};


