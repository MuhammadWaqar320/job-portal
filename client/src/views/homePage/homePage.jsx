import React from "react";
import Header from "../../components/header/header";
import Slider from "../../components/slider/slider";
import Footer from "../../components/footer/footer";
import CdCounter from "../../components/countUp/countUp";
import CompanySection from "../../components/companySection/companySection";
import "./homePage.css";
const HomePage = () => {
  return (
    <>
      <Header />
      <Slider />
      <CdCounter />
      <CompanySection/>
      <Footer/>
    </>
  );
};

export default HomePage;
