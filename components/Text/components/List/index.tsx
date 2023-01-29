import styles from "../../styles/list.module.scss";

import { FC } from "react";
import { ListProps } from "./types";
import { useClassString } from "../../../../hooks";
import { defaultListBulletIcon } from "../../../../constants";

// components
import ListItem from "./ListItem";

const List: FC<ListProps> = (props) => {
  const column = styles[props.column || ""];
  const listIcon = props.listIcon || defaultListBulletIcon;
  const className = useClassString(styles["list"], column, props.className);

  return (
    <ul
      className={ className }
      children={ props.listItems.map(
        (listItem, index) => <ListItem key={ `list-item-${index}` } className={ styles["list-item"] } listItem={ listItem } listIcon={ listIcon } />
      ) }
    />
  );
};

export {
  List as default
};