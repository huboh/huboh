import { FC } from "react";
import { Socials } from "../../constants";

import Button from "../Button";
import styles from "./social-icons.module.scss";

const SocialIcons: FC = () => {
  const socials = Object.keys(Socials);
  const className = styles.social_icons_wrapper;

  return (
    <ul className={ className }>
      { (socials as (keyof typeof Socials)[]).map((social) => (
        <li
          key={ Socials[social].link }
          className={ styles.social_icon_wrapper }
          children={ <Button.ExternalIconLink to={ Socials[social].link || "" } icon={ Socials[social].icon } /> }
        />
      )) }
    </ul>
  );
};

export {
  SocialIcons as default
};