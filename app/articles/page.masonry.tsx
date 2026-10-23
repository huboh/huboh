"use client";

import type { FC } from "react";
import type { DefaultComponentProps } from "../../types";

import styles from "../../styles/pages/articles.module.scss";
import { default as ReactMasonry, ResponsiveMasonry } from "react-responsive-masonry";


const Masonry: FC<DefaultComponentProps> = (props) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={ { 0: 1, 350: 1, 760: 2, 1024: 3 } }>
      <ReactMasonry className={ styles["list"] }>
        { props.children }
      </ReactMasonry>
    </ResponsiveMasonry>

  );
};

export {
  Masonry as default
};