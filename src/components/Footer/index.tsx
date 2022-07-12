import "./footer.scss";

import { FC } from "react";
import { SocialLinks } from "../../constants";

import Text from "../Text";
import ScrollToTop from "../ScrollToTop";
import SocialIcons from "../SocialIcons";


const Footer: FC = () => {
  const paragraphText = (
    <>
      <span children="Designed & Built with 💖 by " />
      <a className="link" target="_blank" rel="noreferrer" children="Musa Knowledge" href={ SocialLinks.twitter } />
    </>
  );

  return (
    <footer className="footer">
      <SocialIcons />
      <Text.Paragraph size="small" children={ paragraphText } />
      <ScrollToTop />
    </footer>
  );
};


export {
  Footer as default
};