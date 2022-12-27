import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { routeNameObj } from "./routesName";
import RegisterCompany from "../components/registerCompany/registerCompany";
import HomePage from "../views/homePage/homePage";
import RegisterUser from "../components/registerUser/registerUser";
import AboutUs from "../views/about/about";
import AllJobs from "../views/allJobs/jobs";
import DetailPage from "../views/detailPage/detailPage";
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
          <Route exact path={routeNameObj.loginForm.route} element={""} />
          <Route
            exact
            path={routeNameObj.registerCompany.route}
            element={<RegisterCompany />}
          />
          <Route
            exact
            path={routeNameObj.registerUser.route}
            element={<RegisterUser />}
          />
          <Route exact path={routeNameObj.allJob.route} element={<AllJobs />} />

          <Route exact path={routeNameObj.about.route} element={<AboutUs />} />
          <Route
            exact
            path={routeNameObj.notFound.route}
            element={<AboutUs />}
          />
          <Route
            exact
            path={routeNameObj.detailPage.route}
            element={<DetailPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
