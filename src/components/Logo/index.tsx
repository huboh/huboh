import Icon from "./variants/Icon";
import Linkable from "./variants/Linkable";
import DefaultLogo, { LogoProps } from "./variants/Logo";

export default function Logo(props: LogoProps) {
  return (
    <DefaultLogo { ...props } />
  );
}

Logo.Icon = Icon;
Logo.Linkable = Linkable;
Logo.Default = DefaultLogo;
