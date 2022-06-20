import { FC } from "react";

// components
import View from "../View";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// sections
import Sections from "./Sections";


const Home: FC = () => (
  <View>
    <Header />
    <Sections />
    <Footer />
  </View>
);


export {
  Home as default
};