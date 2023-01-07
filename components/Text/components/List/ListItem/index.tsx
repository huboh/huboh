import { FC, ReactNode } from "react";

export interface ListItemProps {
  listIcon?: string;
  children?: ReactNode;
  listItem: string | ReactNode;
  className?: string;
}

const ListItem: FC<ListItemProps> = (props) => (
  <li className={ props.className } data-list-icon={ props.listIcon } children={ props.listItem || props.children } />
);

export {
  ListItem as default
};