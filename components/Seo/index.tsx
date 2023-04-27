import { FC } from "react";
import { NextSeo } from "next-seo";
import { SeoProps } from "./types";
import { usePreferences } from "../../hooks";

const Seo: FC<SeoProps> = (props) => {
  const title = `${props.title} - ${props.siteName}`;
  const preferences = usePreferences();

  return (
    <NextSeo
      { ...props }
      title={ title }
      canonical={ props.canonical }
      description={ props.description }
      additionalMetaTags={
        [
          ...(
            props.additionalMetaTags || []
          ),
          ...[
            {
              name: "theme-color",
              content: preferences.colorScheme,
              media: `(prefers-color-scheme: ${preferences.theme})`,
            } as any,
            {
              name: "msapplication-TileColor",
              content: preferences.theme,
            },
            {
              name: "msapplication-config",
              content: "/favicon/browserconfig.xml",
            }
          ]
        ]
      }
      additionalLinkTags={
        [
          ...(
            props.additionalLinkTags || []
          ),
          ...[
            {
              rel: "manifest",
              href: "/manifest.json",
            },
            {
              rel: "shortcut icon",
              href: "/favicon.ico"
            },
            {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: "/assets/images/apple-touch-icon.png",
            },
            {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: "/assets/images/favicon-16x16.png",
            },
            {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: "/assets/images/favicon-32x32.png",
            },
            {
              rel: "mask-icon",
              href: "/assets/images/safari-pinned-tab.svg",
              color: preferences.colorScheme,
            }
          ]
        ]
      }
      twitter={
        {
          ...(props.twitter ?? {}),
          site: props.twitterHandle,
          handle: props.twitterHandle,
          cardType: 'summary_large_image',
        }
      }
      openGraph={
        {
          ...(props.openGraph ?? {}),
          url: props.url ?? props.canonical ?? props.domain,
          type: props.ogType,
          title: props.title,
          locale: props.ogLocale,
          siteName: props.siteName,
          description: props.description,
          images: [
            {
              ...(props.openGraph?.images?.[0] ?? {}),
              alt: props.ogAlt ?? props.title,
              url: props.ogImage!,
              width: props.ogWidth ?? 850,
              height: props.ogHeight ?? 650,
              secureUrl: props.ogImage!,
              type: props.ogImageType,
            }
          ]
        }
      }
    />
  );
};

Seo.defaultProps = {
  title: "Knowledge Musa",
  domain: process.env.NEXT_PUBLIC_DOMAIN,
  siteName: "Knowledge Musa",
  canonical: process.env.NEXT_PUBLIC_DOMAIN,
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE,
  description: "Welcome to my corner of the internet 👀, Knowledge Musa is a software engineer focused in building user-centered, enterprise ready & cutting edge application. I showcase my skills and share my insights on various technologies through detailed tutorials and informative articles. Join me on this journey of exploration and learning.",

  ogAlt: "knowledge musa's portfolio",
  ogType: "website",
  ogWidth: 1200,
  ogHeight: 628,
  ogImage: `${process.env.NEXT_PUBLIC_DOMAIN}/assets/images/siteimage.png`,
  ogLocale: "en_IE",
  ogImageType: "image/png",
};

export {
  Seo as default
};