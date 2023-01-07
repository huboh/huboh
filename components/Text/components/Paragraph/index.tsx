import styles from "../../styles/paragraph.module.scss";

import { TextSize } from "../../types";
import { FC, ReactNode } from "react";
import { useClassString } from "../../../../hooks";

export interface ParagraphProps {
  id?: string;
  size?: TextSize;
  text?: string | ReactNode;
  children?: ReactNode;
  className?: string;
}

const Paragraph: FC<ParagraphProps> = (props) => {
  const size = styles[props.size || ""];
  const className = useClassString(styles.text_paragraph, size, props.className);

  return (
    <p
      id={ props.id }
      children={ props.text || props.children }
      className={ className }
    />
  );
};

export {
  Paragraph as default
};