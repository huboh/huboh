import { ListProps } from "./types";
import { joinClassStrings } from "../../lib";
import styles from "./styles/list.module.scss";

const getItemKey = <T extends (Record<string, any> | string)>(item: T, k: any, d: number): any => {
  if (typeof item !== "object" || item === null) {
    return d;
  }

  return (item as Record<string, unknown>)[k] || d;
};

const List = <T extends (Record<string, any> | string)>(props: ListProps<T>) => {
  const type = props.type || "horizontal";
  const className = joinClassStrings(styles["list"], styles[type], props.className);

  return (
    <ul className={ className }>
      { props.items.map((item, index) => <li key={ getItemKey(item, props.key_, index) } children={ props.render(item) } className={ styles["list-item"] } />) }
    </ul>
  );
};

export {
  List as default
};