import "./hero-section.scss";
import { FC } from "react";

import Text from "../../../../components/Text";
import Section from "../../../../components/Section";

const HeroSection: FC = () => {
  const primaryHeaderText = "knowledge musa.";
  const secondaryHeaderText = "basically, i edit text files for a living 🙂.";
  const shortParagraphText = `i’m a software engineer (and occasionally i design intuitive user interfaces) with a background working in demanding enviroment, passion working on intriguing problems & focused in building high quality, user centered products & cutting-edge mobile or web applications.`;

  return (
    <Section id="hero" className="hero-section" textAlignment="center">
      <div className="hero-section-wrapper">
        <Text.Colored
          text="Hi, my name is"
        />
        <Text.Header.H1
          text={ primaryHeaderText }
          showFullStop={ false }
          className={ "hero-text main-header" }
        />
        <Text.Header.H2
          color={ "grey" }
          showFullStop={ false }
          text={ secondaryHeaderText }
          className={ "hero-text secondary-header" }
        />
        <Text.Paragraph
          text={ shortParagraphText }
          className={ "hero-text paragraph-text" }
        />
        <a className={ `button button-link hero-cta` } href={ "#projects" } >
          <span className='text-wrapper' children="view projects" />
        </a>
      </div>
    </Section>
  );
};

export {
  HeroSection as default
};