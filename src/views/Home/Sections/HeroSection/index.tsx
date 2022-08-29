import "./hero-section.scss";

import { FC } from "react";

// components
import Text from "../../../../components/Text";
import Section from "../../../../components/Section";
import DownLoadResume from "../../../../components/DownLoadResume";

const HeroSection: FC = () => {
  const primaryHeaderText = "knowledge musa.";
  const secondaryHeaderText = "I build enterprise-ready web apps.";
  const shortParagraphText = `i’m a software engineer with background working in demanding enviroment, passion working on intriguing problems & focused in building high quality, user centered applications.`;

  return (
    <Section id="hero" className="hero-section" textAlignment="left">
      <div className="hero-section-wrapper">
        <Text.Colored text="Hi, my name is" />
        <Text.Header.H1 className="hero-text main-header" size="large" text={ primaryHeaderText } showFullStop={ false } />
        <Text.Header.H2 className="hero-text secondary-header" color={ "grey" } showFullStop={ false } text={ secondaryHeaderText } />
        <Text.Paragraph className="hero-text paragraph-text" text={ shortParagraphText } />
        <DownLoadResume />
      </div>
    </Section>
  );
};

export {
  HeroSection as default
};