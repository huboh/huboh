import "./list.scss";

import { FC } from "react";
import { ListProps } from "./types";
import { joinClassStrings } from "../../../../utils";
import { defaultListBulletIcon } from "../../../../constants";

// components
import ListItem from "./ListItem";


const List: FC<ListProps> = ({ children, ...props }) => {
  const column = props.column || "";
  const className = props.className || "";
  const classString = joinClassStrings(column, className);

  return (
    <ul
      className={ `list ${classString}` }
      children={ props.listItems.map((listItem, index) => (
        <ListItem
          listItem={ listItem }
          key={ `list-item-${index}` }
          listIcon={ props.listIcon || defaultListBulletIcon }
        />
      )) }
    />
  );
};


export {
  List as default
};