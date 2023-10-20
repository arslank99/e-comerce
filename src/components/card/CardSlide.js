import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { company } from "../../Data";
const CardSlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const sliders = () => {
    return company.map((data) => {
      return (
        <div key={data}>
          <img
            alt="image"
            src={data.img}
            className="img-fluid"
            style={{ display: "flex", alignItems: "center" }}
          />
        </div>
      );
    });
  };
  return (
    <>
      <Slider {...settings}>{sliders()}</Slider>
    </>
  );
};

export default CardSlide;
