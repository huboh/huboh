import { FC } from "react";
import { useClassString } from "../../hooks";

// components
import { Resume } from "../../constants";
import { TbCloudDownload } from 'react-icons/tb';

// styles
import buttonStyles from '../Button/styles/button.module.scss';
import buttonLinkStyles from '../Button/styles/button-link.module.scss';

interface DownloadResumeProps {
  className?: string;
}

const DownloadResumeBtn: FC<DownloadResumeProps> = (props) => {
  const title = "resume";
  const cloud = <TbCloudDownload />;
  const className = useClassString(buttonStyles.button, buttonLinkStyles.button_link, props.className);

  return (
    <a title={ title } className={ className } href={ Resume.path } target={ "_blank" } rel={ "noreferrer" }>
      <span className={ buttonStyles.icon_wrapper }>{ cloud }</span>
      <span className={ buttonStyles.text_wrapper }>{ title }</span>
    </a>
  );
};

export {
  DownloadResumeBtn as default
};