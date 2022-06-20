import '../Button/variants/Button/button.scss';
import '../Button/variants/ButtonLink/button-link.scss';

import { FC } from "react";
import { TbFileDownload } from 'react-icons/tb';
import { ResumeDownloadLink, ResumeFileName } from "../../constants";



const DownloadResume: FC = () => (
  <a className={ `button button-link` } href={ ResumeDownloadLink } download={ ResumeFileName }>
    <span className="icon-wrapper">{ <TbFileDownload /> }</span>
    <span className='text-wrapper'> { "resume" } </span>
  </a>
);


export {
  DownloadResume as default
};