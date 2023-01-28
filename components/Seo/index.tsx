import { FC } from "react";
import { SeoProps } from "./types";
import { usePreferences } from "../../hooks";
import { default as Head } from "next/head";

const Seo: FC<SeoProps> = (props) => {
  const title = `${props.title} - ${props.siteName}`;
  const preferences = usePreferences();

  return (
    <Head>
      <meta
        name="robots"
        content="index,follow"
      />
      <link
        rel="shortcut icon"
        href="/favicon.ico"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/images/favicon-16x16.png"
      />
      <link
        rel="manifest"
        href="/manifest.json"
      />
      <link
        rel="mask-icon"
        href="/assets/images/safari-pinned-tab.svg"
        color={ preferences.colorScheme }
      />
      <link
        rel="canonical"
        href={ props.canonical ?? props.domain }
      />
      <meta
        name="theme-color"
        content={ preferences.colorScheme }
        media={ `(prefers-color-scheme: ${preferences.theme})` }
      />
      <meta
        name="msapplication-TileColor"
        content={ preferences.colorScheme }
      />
      <meta
        name="msapplication-config"
        content="/favicon/browserconfig.xml"
      />
      <title
        children={ title }
      />
      <meta
        name="description"
        content={ props.description }
      />
      <meta
        key="og_image:alt"
        content={ title }
        property="og:image:alt"
      />
      <meta
        key="og_image:width"
        content="1200"
        property="og:image:width"
      />
      <meta
        key="og_image:height"
        content="630"
        property="og:image:height"
      />
      <meta
        key="og_type"
        property="og:type"
        content={ props.ogType }
      />
      <meta
        key="og_title"
        property="og:title"
        content={ props.title }
      />
      <meta
        key="og_image"
        property="og:image"
        content={ props.ogImage }
      />
      <meta
        key="og_description"
        property="og:description"
        content={ props.description }
      />
      <meta
        key="og_locale"
        content="en_IE"
        property="og:locale"
      />
      <meta
        key="og_site_name"
        property="og:site_name"
        content={ props.siteName }
      />
      <meta
        key="og_url"
        property="og:url"
        content={ props.canonical ?? props.domain }
      />
      <meta
        key="og_site_name"
        property="og:site_name"
        content={ props.siteName }
      />
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        key="twitter:site"
        name="twitter:site"
        content={ props.twitterHandle }
      />
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content={ props.twitterHandle }
      />
      <meta
        key="twitter:title"
        content={ props.title }
        property="twitter:title"
      />
      <meta
        key="twitter:description"
        content={ props.description }
        property="twitter:description"
      />
    </Head>
  );
};

Seo.defaultProps = {
  title: "Knowledge Musa",
  ogType: "website",
  domain: process.env.NEXT_PUBLIC_DOMAIN,
  ogImage: "/assets/images/knowledge.jpg",
  siteName: "Knowledge Musa",
  canonical: process.env.NEXT_PUBLIC_DOMAIN,
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE,
  description: "Explore the portfolio and read articles from Knowledge Musa, a professional software engineer specializing in building enterprise-ready web applications and mobile apps. Discover my skills and experience in front-end and back-end web development, as well as my knowledge of the latest industry trends and technologies. Learn from my articles and tutorials on various programming topics, and check out examples of my work in the projects section. Whether you're an individual or a business looking for a software engineer, you'll find valuable information here",
};

export {
  Seo as default
};