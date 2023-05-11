import { FC } from "react";
import { Skills } from "../../../../constants";

// components
import Text from "../../../Text";
import Image from "../../../Image";
import Section from "../../../Section";
import AboutMeImage from "../../../../public/assets/images/musa-knowledge.jpeg";

// styles
import styles from "./about.module.scss";

const AboutMe: FC = () => {
  const id = "about";
  const className = styles.about_me_section;

  return (
    <Section id={ id } className={ className }>
      <Text.Header.H2
        text={ "about me" }
        className={ styles.section_header }
      />

      <div className={ styles.about_me_section_wrapper }>
        <div className={ styles.text_wrapper }>
          <Text.Paragraph>
            Hello! I’m Knowledge Musa, a software engineer with over 6 years of experience in demanding environments focused in building user centered & cutting-edge applications.
          </Text.Paragraph>

          <Text.Paragraph>
            My interest in software development started back in 2014 when i was introduced to the WordPress ecosystem by my sister where i started customizing & building custom wordpress themes and plugin.
          </Text.Paragraph>

          <Text.Paragraph>
            Fast-forward to today, I've had the privilege of working at <Text.Link href={ "https://www.ctechway.com/" } text={ "Ctechway" } target={ "_blank" } showExtIcon={ true } />, worked with awesome individuals and built great applications. My main focus these days are Noteway, Go, Blockchain Development, Distributed Systems, Creating Great Experiences & User-Centered Products.
          </Text.Paragraph>

          <Text.Paragraph>
            Here are a few Technologies i work with on a daily basis:
          </Text.Paragraph>

          <Text.List
            column="column-2"
            listItems={ Skills }
            className={ styles.skills_list }
          />
        </div>

        <Image.Styled
          src={ AboutMeImage }
          alt={ "musa knowledge" }
          className={ styles.about_me_img }
        />
      </div>
    </Section>
  );
};

export {
  AboutMe as default
};