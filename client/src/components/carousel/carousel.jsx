import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/images/bg14.jpg";
import img3 from "../../assets/images/bg12.jpg";
import "./carousel.css";
const CarouselCom = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="slider-content">
            <h1 style={{ color: "yellow" }}>Find your job you like it</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className="slider-content">
            <h1 style={{ color: "yellow" }}>Top rated online job portal</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselCom;
