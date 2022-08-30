import "./about-me-section.scss";

import { FC } from "react";
import { Skills } from "../../../../constants";

// components
import Text from "../../../../components/Text";
import Image from "../../../../components/Image";
import Section from "../../../../components/Section";
import SkillsList from "./components/SkillsList";

// @ts-ignore
import imageSrc from "./assets/about-me.jpg";


const AboutMeSection: FC = () => (
  <Section id="about" className="about-me-section">
    <Text.Header.H2
      text="about me"
      className="section-header"
    />

    <div className="about-me-section-wrapper">
      <div className="text-wrapper">
        <Text.Paragraph>
          Hello! I’m Knowledge, a software engineer with over 6 years of experience in demanding enviroments focused in building user centered & cutting-edge applications.
        </Text.Paragraph>

        <Text.Paragraph>
          My interest in software development started back in 2014 when i was introduced to the WordPress ecosystem by my sister where i started customizing & building custom wordpress themes and plugin.
        </Text.Paragraph>

        <Text.Paragraph>
          Fast-forward to today, I've had the privilege of working at <a className="link" target="_blank" rel="noreferrer" children="Ctechway" href={ "https://www.ctechway.com" } />, worked with awesome individuals and built great applications. My main focus these days are Noteway, Go, Blockchain Development, Distributed Systems, Creating Great Experiences & User-Centered Products.
        </Text.Paragraph>

        <Text.Paragraph>
          Here are a few Technologies i work with on a daily basis:
        </Text.Paragraph>

        <SkillsList
          skills={ Skills }
        />
      </div>

      <Image.Styled
        altText="musa knowledge"
        imageSrc={ imageSrc }
        roundedBorder={ true }
        className="about-me-img"
      />
    </div>
  </Section>
);


export {
  AboutMeSection as default
};