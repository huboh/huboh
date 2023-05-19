import { FC } from "react";

// components
import Text from "../../../Text";
import Section from "../../../Section";

// styles
import styles from "./hero.module.scss";

const Hero: FC = () => {
  const id = "hero";
  const className = styles.hero_section;
  const headerText = "I build enterprise ready applications for the web";

  return (
    <Section id={ id } className={ className } textAlignment={ "center" }>
      <div
        className={ styles["gaussian-gradients"] }
        children={
          <>
            <div />
            <div />
            <div />
            <div />
          </>
        }
      />

      <Text.Header.H1
        size={ "medium" }
        text={ headerText }
        showFullStop={ true }
      />
    </Section>
  );
};

export {
  Hero as default
};