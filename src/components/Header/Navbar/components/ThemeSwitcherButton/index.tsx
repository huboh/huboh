import { FC } from "react";
import { TbMoon } from 'react-icons/tb';

import Button from "../../../../Button";


const ThemeSwitcherButton: FC = () => (
  <Button.Icon
    icon={ <TbMoon /> }
  />
);


export {
  ThemeSwitcherButton as default
};