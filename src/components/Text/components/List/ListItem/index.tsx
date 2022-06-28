import { FC, ReactNode } from "react";

export interface ListItemProps {
  listIcon?: string;
  listItem: string | ReactNode;
  children?: ReactNode;
}


const ListItem: FC<ListItemProps> = ({ children, ...props }) => (
  <li
    className="list-item"
    data-list-icon={ props.listIcon }
    children={ props.listItem || children }
  />
);


export {
  ListItem as default
};