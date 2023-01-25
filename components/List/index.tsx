import { ListProps } from "./types";
import { useClassString } from "../../hooks";
import styles from "./styles/list.module.scss";

const List = <T = any>(props: ListProps<T>) => {
  const type = props.type || "horizontal";
  const className = useClassString(styles["list"], styles[type], props.className);
  const getItemKey = (item: T, d: number): any => (typeof item === "object" ? ((item!)[props.k!] || d) : d);

  return (
    <ul className={ className }>
      { props.items.map((item, index) => <li key={ getItemKey(item, index) } children={ props.render(item) } className={ styles["list-item"] } />) }
    </ul>
  );
};

export {
  List as default
};