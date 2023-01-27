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
  const paragraphText = "I'm currently looking for new opportunities that'll expose me to more intriguing problems. Reach out if you got a question, proposal or project you would like me to hop on, my inbox is always open.";

  return (
    <Section id={ id } textAlignment={ "center" } className={ styles.get_in_touch_section }>
      <Text.Colored
        text="What's Next?"
      />
      <Text.Header.H2
        text="get in touch!!!"
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