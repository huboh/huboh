import './loader.scss';
import { FC } from 'react';

const Loader: FC = () => (
  <div className='loader'>
    <span className='loader-text'>loading...</span>
  </div>
);

export {
  Loader as default
};