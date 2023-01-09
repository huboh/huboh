import { FC } from "react";
import { Socials } from "../../constants";

// components
import Text from "../Text";
import SocialIcons from "../SocialIcons";
import ScrollToTop from "../ScrollToTop";

// styles
import styles from "./footer.module.scss";
import linkStyles from "../Text/styles/link.module.scss";

const Footer: FC = () => {
  const paragraphText = (
    <>
      <span children="Designed & Built with 💖 by " />
      <a className={ linkStyles.link } target="_blank" rel="noreferrer" children="Musa Knowledge" href={ Socials.twitter.link } />
    </>
  );

  return (
    <footer className={ styles.footer }>
      <SocialIcons />
      <Text.Paragraph size="small" children={ paragraphText } />
      <ScrollToTop />
    </footer>
  );
};

export {
  Footer as default
};