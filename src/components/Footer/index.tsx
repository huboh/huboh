import "./footer.scss";

import { FC } from "react";

import Text from "../Text";
import ScrollToTop from "../ScrollToTop";


const Footer: FC = () => (
  <footer className="footer">
    <Text.Paragraph size="small">
      <span>Designed & Built with 💖 by </span>
      <a className="link" href="https://www.twitter.com" target="_blank" rel="noreferrer" >Musa Knowledge</a>
    </Text.Paragraph>
    <ScrollToTop />
  </footer>
);


export {
  Footer as default
};