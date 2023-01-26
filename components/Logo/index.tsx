import styles from "./styles/logo.module.scss";
import LogoSrc from "../../public/assets/images/logo.png";

// components
import Icon from "./variants/Icon";
import Link from "./variants/Link";
import Image from "next/image";

// hooks
import useClassString from "../../hooks/useClassString";

interface LogoProps {
  id?: string;
  className?: string;
}

export default function Logo(props: LogoProps) {
  const id = props.id;
  const className = useClassString(styles.logo_wrapper, props.className);

  return (
    <div className={ className }>
      <Image id={ id } src={ LogoSrc } alt={ "knowledge musa's logo" } className={ styles.logo } placeholder={ "blur" } />
    </div>
  );
}

Logo.Icon = Icon;
Logo.Link = Link;