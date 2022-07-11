import { FC } from "react";

// components
import View from "../View";
import Sections from "./Sections";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// hooks
import useDocumentTitle from "../../hooks/useDocumentTitle";


const Home: FC = () => {
  useDocumentTitle("Knowledge Musa - Software Engineer.");

  return (
    <View>
      <Header />
      <Sections />
      <Footer />
    </View>
  );
};


export {
  Home as default
};