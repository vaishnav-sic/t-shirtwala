import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import TankTops from "../assets/categoriesSample/tank-top.png";
// import Hoodies from "../assets/categoriesSample/hoodie.png";
// import GraphicsTshirt from "../assets/categoriesSample/graphic Thisrt.png";
// import Sample from "../assets/categoriesSample/crop-top.png";
import Sample1 from "../assets/carouselImages/Sample1.jpg";
import Sample2 from "../assets/carouselImages/Sample2.jpg";
import Sample3 from "../assets/carouselImages/Sample3.jpg";
import Sample4 from "../assets/carouselImages/Sample4.jpg";
import Sample5 from "../assets/carouselImages/Sample5.jpg";
import Sample6 from "../assets/carouselImages/Sample6.jpg";

import "../cssFiles/carousel.css";

const CarouselComponent = () => {
  return (
    <Carousel autoPlay interval={5000} infiniteLoop showThumbs={false}>
      <div className="carousel-img">
        <img src={Sample1} alt="Sample1" />
      </div>
      <div className="carousel-img">
        <img src={Sample2} alt="Sample2" />
      </div>
      <div className="carousel-img">
        <img src={Sample3} alt="Sample3" />
      </div>
      <div className="carousel-img">
        <img src={Sample4} alt="Sample4" />
      </div>
      <div className="carousel-img">
        <img src={Sample5} alt="Sample5" />
      </div>
      <div className="carousel-img">
        <img src={Sample6} alt="Sample6" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
