// types
import type { GeneratePageMetadata, Page } from "@/types";

// styles
import styles from "@/styles/pages/404.module.scss";

// utils
import { HOME } from "@/constants/routes";
import { TbHome } from "react-icons/tb";
import { headers } from "next/headers";
import { getCurrentUrl } from "@/middleware";
import { joinClassStrings } from "@/lib";

// components
import View from "@/components/View";
import Text from "@/components/Text";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ButtonLink from "@/components/Button/variants/ButtonLink";

const generateMetadata: GeneratePageMetadata = async () => {
  return {
    title: "(404) Page Not found",
    openGraph: {
      title: "(404) Page Not found"
    },
    alternates: {
      canonical: getCurrentUrl(await headers())
    },
    robots: {
      follow: false,
      index: false
    }
  };
};

const NotFoundPage: Page = () => {
  return (
    <View className={ joinClassStrings(styles["not-found"]) }>
      <Header id="header" />
      <main className={ "main" }>
        <Section textAlignment={ "center" } className={ styles["section"] }>
          <Text.Header.H1 text={ "(404) Page Not Found" } size={ "medium" } />
          <Text.Paragraph text={ "couldn't find the requested resource 🙃" } />
          <ButtonLink href={ HOME } icon={ <TbHome /> } text={ "Go Back Home" } />
        </Section>
      </main>
      <Footer id="footer" />
    </View>
  );
};

export {
  NotFoundPage as default,
  generateMetadata
};