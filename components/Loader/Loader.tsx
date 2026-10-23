import { type FC } from "react";
import { CgSpinner } from "react-icons/cg";
import styles from "./loader.module.scss";

const Loading: FC = () => {
  return (
    <section className={ styles["loader"] }>
      <CgSpinner className={ styles["spinner"] } />
    </section>
  );
};

const FullScreenLoading: FC = () => {
  return (
    <section className={ styles["full-screen"] }>
      <CgSpinner className={ styles["spinner"] } />
    </section>
  );
};

export {
  Loading as default,
  Loading,
  FullScreenLoading,
};