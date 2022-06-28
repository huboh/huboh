import { FC } from "react";

export interface FullStopProps {
  showFullStop?: boolean;
}

const FullStop: FC<FullStopProps> = ({ showFullStop }) => (
  (showFullStop ?? true) ? <span className="full-stop"></span> : null
);

export {
  FullStop as default
};