import React from "react";
import "./Instagram.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMessage } from "@fortawesome/free-solid-svg-icons";
import { instagram } from "../../Data";
const Instagram = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliders = () => {
    return instagram.map((data) => {
      return (
        <div className="insta-container" key={data.id}>
          <div className="instaOverlay">
            <div className="Text">
              <span>
                <FontAwesomeIcon icon={faHeart} className="icons" />
                22
              </span>
              <span>
                <FontAwesomeIcon icon={faMessage} className="icons" />
                22
              </span>
            </div>
          </div>
          <img alt="image" src={data.img} className="img-fluid" />
        </div>
      );
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div class="heading text-center">
              <h2 class="title">Follow Us On Instagram</h2>
              <p class="title-desc">Wanna share your style with us?</p>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <div className="col-md-12 p-0">
            <Slider {...settings}>{sliders()}</Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instagram;
