import { FC, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import * as routes from "../../constants/routes";

// views
const Home = lazy(() => import("../../views/Home"));
const Blog = lazy(() => import("../../views/Blog"));
const Blogs = lazy(() => import("../../views/Blogs"));
const NotFound = lazy(() => import("../../views/404"));


const Router: FC = () => (
  <Routes>
    <Route index element={ <Home /> } />
    <Route path={ routes.BLOG } element={ <Blog /> } />
    <Route path={ routes.BLOGS } element={ <Blogs /> } />
    <Route path={ routes.WILDCARD } element={ <NotFound /> } />
  </Routes>
);


export {
  Router as default
};