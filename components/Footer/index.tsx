import { FC } from "react";
import { Socials } from "../../constants";

// components
import Text from "../Text";
import SocialIcons from "../SocialIcons";
import ScrollToTop from "../ScrollToTop";

// styles
import styles from "./styles/footer.module.scss";
import linkStyles from "../Text/styles/link.module.scss";

interface FooterProps {
  id?: string;
}

const Footer: FC<FooterProps> = (props) => {
  const id = props.id;
  const className = styles["footer"];
  const paragraphText = (
    <>
      <span children="Designed & Built with 💖 by " />
      <a className={ linkStyles.link } target="_blank" rel="noreferrer" children="Musa Knowledge" href={ Socials.linkedIn.link } />
    </>
  );

  return (
    <footer id={ id } className={ className }>
      <SocialIcons />
      <Text.Paragraph size="small" children={ paragraphText } />
      <ScrollToTop />
    </footer>
  );
};

export {
  Footer as default
};