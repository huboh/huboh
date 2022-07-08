import "./social-icons.scss";

import { FC } from "react";
import { SocialLinks } from "../../constants";
import { TbBrandLinkedin, TbBrandTwitter, TbBrandGithub } from "react-icons/tb";

import Button from "../Button";

const socialIcons = [
  { icon: <TbBrandGithub />, link: SocialLinks.github },
  { icon: <TbBrandTwitter />, link: SocialLinks.twitter },
  { icon: <TbBrandLinkedin />, link: SocialLinks.linkedIn },
];

const SocialIcons: FC = () => (
  <ul className="social-icons-wrapper">
    { socialIcons.map(socialIcon => (
      <li
        key={ socialIcon.link }
        className="social-icon-wrapper"
        children={ <Button.IconLink to={ socialIcon.link } icon={ socialIcon.icon } /> }
      />
    )) }
  </ul>
);

export {
  SocialIcons as default
};