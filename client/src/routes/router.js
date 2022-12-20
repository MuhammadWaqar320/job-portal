import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { routeNameObj } from "./routesName";
import HomePage from "../views/homePage/homePage";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path={routeNameObj.homePage.route}
            element={<HomePage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
