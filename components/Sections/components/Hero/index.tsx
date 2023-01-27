import { FC } from "react";

// components
import Text from "../../../Text";
import Section from "../../../Section";

// styles
import styles from "./hero.module.scss";

const Hero: FC = () => {
  const id = "hero";
  const className = styles.hero_section;
  const headerText = "I build enterprise ready web applications";

  return (
    <Section id={ id } className={ className } textAlignment={ "center" }>
      <Text.Header.H1
        color={ "grey" }
        size={ "medium" }
        text={ headerText }
        showFullStop={ false }
      />
    </Section>
  );
};

export {
  Hero as default
};