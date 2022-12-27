import React from "react";
import CarouselCom from "../../components/carousel/carousel";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import JobComponent from "../../components/jobComponent/jobComponent";
function AllJobs() {
  return (
    <div>
      <Header />
      <CarouselCom />
      <JobComponent />
      <Footer />
    </div>
  );
}
export default AllJobs;
