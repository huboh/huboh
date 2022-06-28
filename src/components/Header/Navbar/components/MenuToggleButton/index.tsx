import { FC } from "react";
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

import Button from "../../../../Button";


const MenuToggleButton: FC = () => (
  <Button.Icon
    icon={ <HiOutlineMenuAlt3 /> }
  />
);


export {
  MenuToggleButton as default
};