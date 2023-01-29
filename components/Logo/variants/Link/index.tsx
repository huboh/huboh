import { FC } from "react";
import styles from "../../styles/link.module.scss";

// hooks
import useClassString from "../../../../hooks/useClassString";

// components
import Link from "next/link";
import Logo from "../../index";

interface LinkableProps {
  id?: string;
  href?: string;
  className?: string;
}

const LogoLink: FC<LinkableProps> = (props) => {
  const id = props.id;
  const href = props.href || "/";
  const className = useClassString(styles["logo-link"], props.className);

  return (
    <Link
      id={ id }
      href={ href }
      children={ <Logo /> }
      className={ className }
    />
  );
};

export {
  LogoLink as default
};