import './loader.scss';
import { FC } from 'react';
import Logo from "../Logo";

const Loader: FC = () => (
  <div className='loader'>
    <Logo.Icon className='logo' />
  </div>
);

export {
  Loader as default
};