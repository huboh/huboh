import { FC } from "react";
import { TAGS } from "../../../constants/routes";
import { TagProps } from "./tag";
import { joinClassStrings } from "../../../lib";

// 
import Text from "../../Text";
import styles from "./tag.module.scss";

const Tag: FC<TagProps> = (props) => {
  const link = `${TAGS}/${props.path || props.tag}`;
  const className = joinClassStrings(styles["tag"], props.className);

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