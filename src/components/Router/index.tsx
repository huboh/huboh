import { FC, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import * as routes from "../../constants/routes";

// views
const Home = lazy(() => import("../../views/Home"));
const Blog = lazy(() => import("../../views/Blog"));
const Blogs = lazy(() => import("../../views/Blogs"));


const Router: FC = () => (
  <Routes>
    <Route index element={ <Home /> } />
    <Route path={ routes.BLOG } element={ <Blog /> } />
    <Route path={ routes.BLOGS } element={ <Blogs /> } />
  </Routes>
);


export {
  Router as default
};