import Icon from "./variants/Icon";
import IconLink from "./variants/IconLink";
import ButtonLink from "./variants/ButtonLink";
import ButtonExternalLink from "./variants/ButtonExternalLink";
import ButtonExternalIconLink from "./variants/ButtonExternalIconLink";
import ButtonDefault, { ButtonProps } from "./variants/Button";

export default function Button(props: ButtonProps) {
  return (
    <ButtonDefault { ...props } />
  );
}

Button.Icon = Icon;
Button.Link = ButtonLink;
Button.IconLink = IconLink;
Button.ExternalLink = ButtonExternalLink;
Button.ExternalIconLink = ButtonExternalIconLink;