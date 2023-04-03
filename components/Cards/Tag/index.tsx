import { FC } from "react";
import { TAGS } from "../../../constants/routes";
import { TagProps } from "./tag";

// 
import Text from "../../Text";
import styles from "./tag.module.scss";
import useClassString from "../../../hooks/useClassString";

const Tag: FC<TagProps> = (props) => {
  const link = `${TAGS}/${props.tag}`;
  const className = useClassString(styles["tag"], props.className);

  return (
    <Text.Link
      href={ link }
      text={ props.tag }
      className={ className }
    />
  );
};

export {
  Tag as default
};