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
      additionalMetaTags={ [
        ...(props.additionalMetaTags || []),
        ...[
          {
            name: "theme-color",
            content: preferences.colorScheme,
            media: `(prefers-color-scheme: ${preferences.theme})`,
          } as any,
          {
            name: "msapplication-TileColor",
            content: preferences.colorScheme,
          },
          {
            name: "twitter:image",
            content: props.ogImage,
          },
          {
            name: "twitter:image:alt",
            content: props.ogAlt,
          },
          {
            name: "msapplication-config",
            content: "/favicon/browserconfig.xml",
          }
        ]]
      }
      additionalLinkTags={ [
        ...(props.additionalLinkTags || []),
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
            rel: "canonical",
            href: (props.canonical ?? props.domain)!,
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
      ] }
      twitter={ {
        ...(props.twitter ?? {}),
        site: props.twitterHandle,
        handle: props.twitterHandle,
        cardType: 'summary_large_image',
      } }
      openGraph={ {
        ...(props.openGraph ?? {}),
        url: props.url ?? props.canonical ?? props.domain,
        type: props.ogType,
        title: props.title,
        locale: props.ogLocale,
        siteName: props.siteName,
        description: props.description,
        images: [
          {
            alt: props.ogAlt ?? props.title,
            url: props.ogImage!,
            width: props.ogWidth!,
            height: props.ogHeight!,
          }
        ]
      } }
    />
  );
};

Seo.defaultProps = {
  title: "Knowledge Musa",
  domain: process.env.NEXT_PUBLIC_DOMAIN,
  siteName: "Knowledge Musa",
  canonical: process.env.NEXT_PUBLIC_DOMAIN,
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE,
  description: "Explore the portfolio and read articles from Knowledge Musa, a professional software engineer specializing in building enterprise-ready web applications and mobile apps. Discover my skills and experience in front-end and back-end web development, as well as my knowledge of the latest industry trends and technologies. Learn from my articles and tutorials on various programming topics, and check out examples of my work in the projects section. Whether you're an individual or a business looking for a software engineer, you'll find valuable information here",

  ogAlt: "knowledge musa's portfolio",
  ogType: "website",
  ogWidth: 1200,
  ogHeight: 630,
  ogImage: "/assets/images/knowledge.jpg",
  ogLocale: "en_IE",
};

export {
  Seo as default
};