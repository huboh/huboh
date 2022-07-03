import '../Button/variants/Button/button.scss';
import '../Button/variants/ButtonLink/button-link.scss';

import { FC } from "react";
import { TbFileDownload } from 'react-icons/tb';
import { joinClassStrings } from '../../utils';
import { ResumeDownloadLink, ResumeFileName } from "../../constants";

interface DownloadResumeProps {
  className?: string;
}


const DownloadResume: FC<DownloadResumeProps> = ({ className }) => {
  const classString = joinClassStrings("button button-link", className || "");

  return (
    <a className={ classString } href={ ResumeDownloadLink } download={ ResumeFileName }>
      <span className="icon-wrapper">{ <TbFileDownload /> }</span>
      <span className='text-wrapper'> { "resume" } </span>
    </a>
  );
};


export {
  DownloadResume as default
};