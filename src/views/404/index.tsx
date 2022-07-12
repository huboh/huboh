import "./styles/404.scss";

import { FC } from "react";
import { TbHome } from "react-icons/tb";
import { HOME } from "../../constants/routes";

// components
import View from "../View";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Section from "../../components/Section";

// hooks
import useDocumentTitle from "../../hooks/useDocumentTitle";

const NotFound: FC = () => {
  useDocumentTitle("Not Found - Knowledge Musa.");

  return (
    <View>
      <Header />
      <main >
        <Section className="notfound-section" textAlignment="center">
          <Text.Header.H1
            text={ "404" }
            size={ "large" }
          />
          <Text.Paragraph
            className={ "notfound-msg" }
            text={ "Yup, there's definitely a mistake somewhere. couldn't find the requested resource 🙃" }
          />
          <Button.Link
            to={ HOME }
            text={ "go home" }
            icon={ <TbHome /> }
            className={ "go-home-cta" }
          />
        </Section>
      </main>
      <Footer />
    </View>
  );
};


export {
  NotFound as default
};