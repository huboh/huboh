"use client";

import { type FC } from "react";

const ClientLogger: FC<{ log: string; }> = (props) => {
  console.log(`%c${props.log}`, "font-size: 1.2rem; font-weight: 900;");
  return null;
};

export {
  ClientLogger as default,
  ClientLogger
};