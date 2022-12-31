import { FC } from "react";
import Head from "next/head";

interface SeoProps {
  title: string;
  description: string;
}

const Seo: FC<SeoProps> = (props) => {
  return (
    <Head>
      <title
        children={ props.title }
      />
      <meta
        name="description"
        content={ props.description }
      />
    </Head>
  );
};

export {
  Seo as default
};