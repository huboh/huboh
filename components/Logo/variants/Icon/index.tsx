import { FC } from "react";
import Image from "next/image";
import IconSrc from "../../../../public/assets/images/icon.png";
import useClassString from "../../../../hooks/useClassString";

interface LogoProps {
  id?: string;
  className?: string;
}

const Icon: FC<LogoProps> = (props) => {
  const id = props.id;
  const className = useClassString(props.className);

  return (
    <Image id={ id } src={ IconSrc } alt={ "knowledge musa" } className={ className } placeholder={ "blur" } />
  );
};

export {
  Icon as default
};