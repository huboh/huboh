import { FC } from "react";

export interface FullStopProps {
  showFullStop?: boolean;
}

const FullStop: FC<FullStopProps> = (props) => (
  (props.showFullStop ?? true) ? <span className={ "full_stop" } /> : null
);

export {
  FullStop as default
};