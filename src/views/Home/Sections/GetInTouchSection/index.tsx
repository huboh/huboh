import "./get-in-touch.scss";

import { FC } from "react";
import { TbMessage2Share } from "react-icons/tb";

import Text from "../../../../components/Text";
import Button from "../../../../components/Button";
import Section from "../../../../components/Section";


const GetInTouchSection: FC = () => {
  const emailImportance = "high";
  const emailSubject = encodeURIComponent("Hey Knowledge, New Opportunity Awaits. Lets Talk!");
  const emailBody = encodeURIComponent(``);

  return (
    <Section id="contact" className="get-in-touch-section" textAlignment="center">
      <div className="get-in-touch-section-wrapper">
        <Text.Colored
          text="What's Next?"
        />
        <Text.Header.H2
          className="main-header"
          text="get in touch!"
        />
        <Text.Paragraph
          className="paragraph-text"
          text="I'm currently looking for new opportunities that'll expose me to more intriguing problems. Reach out if you got a question, proposal or project you would like me to hop on, my inbox is always open."
        />
        <Button.ExternalLink
          text="leave me a message"
          className="get-in-touch-cta"
          icon={ <TbMessage2Share /> }
          to={ `mailto:kenn1000kenn@gmail.com?importance=${emailImportance}&subject=${emailSubject}&body=${emailBody}` }
        />
      </div >
    </Section>
  );
};


export {
  GetInTouchSection as default
};