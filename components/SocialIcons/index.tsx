import { FC } from "react";
import { Socials } from "../../constants";

import styles from "./social-icons.module.scss";
import ButtonExternalIconLink from "../Button/variants/ButtonExternalIconLink";

const SocialIcons: FC = () => {
  const socials = Object.keys(Socials);
  const className = styles["social-icons-wrapper"];

  return (
    <ul className={ className }>
      { (socials as (keyof typeof Socials)[]).map((social) => (
        <li
          key={ Socials[social].link }
          className={ styles["social-icon-wrapper"] }
          children={ <ButtonExternalIconLink to={ Socials[social].link || "" } icon={ Socials[social].icon } /> }
        />
      )) }
    </ul>
  );
};

export {
  SocialIcons as default
};