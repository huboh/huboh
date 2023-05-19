import { FC } from "react";
import { TbMessage2Share } from "react-icons/tb";

// components
import Text from "../../../Text";
import Button from "../../../Button";
import Section from "../../../Section";

// styles
import styles from "./contact.module.scss";

const GetInTouch: FC = () => {
  const id = "contact";
  const emailSubject = encodeURIComponent("Hey Knowledge, New Opportunity Awaits. Lets Talk!");
  const externalLink = `mailto:kenn1000kenn@gmail.com?importance=high&subject=${emailSubject}&body=`;
  const paragraphText = "I'm currently available and more than happy to help build and launch your product and/or your startup. I could help take you or your team from idea/prototype to production while picking out tech stack, infra architecture and others. I could also help review architecture and/or code, you just name it. I would only take up roles where I am very I certain can provide enough human capital to you or your team.";

  return (
    <Section id={ id } textAlignment={ "center" } className={ styles.get_in_touch_section }>
      <Text.Colored
        text="What's Next?"
      />
      <Text.Header.H2
        text="get in touch!"
        className={ styles.main_header }
      />
      <Text.Paragraph
        text={ paragraphText }
        className={ styles.paragraph_text }
      />
      <Button.ExternalLink
        to={ externalLink }
        icon={ <TbMessage2Share /> }
        text={ "leave me a message" }
        className={ styles.get_in_touch_cta }
      />
    </Section>
  );
};

export {
  GetInTouch as default
};