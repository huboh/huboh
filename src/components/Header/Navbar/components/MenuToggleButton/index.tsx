import { FC } from "react";
import { CgMenuRight } from 'react-icons/cg';

import Button from "../../../../Button";


const ThemeSwitcherButton: FC = () => (
  <Button.Icon
    icon={ <CgMenuRight /> }
  />
);


export {
  ThemeSwitcherButton as default
};