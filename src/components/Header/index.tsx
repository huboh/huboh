import "./header.scss";
import { FC } from "react";

import Logo from "../Logo";
import Navbar from "./Navbar";


const Header: FC = () => (
  <header className="header">
    <Logo />
    <Navbar />
  </header>
);


export {
  Header as default
};