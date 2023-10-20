import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import User1 from "../images/user-1.jpg";
import User2 from "../images/user-2.jpg";
const Customer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="customer text-center">
            <h3 className="cust-title">What Customer Say About Us</h3>
          </div>
        </div>
      </div>
      {/* Slick Slider */}
      <div className="row custom-pad">
        <div className="col-md-2"></div>
        <div className="col-md-8 text-center">
          <Slider {...settings}>
            <div className="slid1">
              <div className="img-div">
                <img src={User1} alt="" />
              </div>
              <p>
                “ Impedit, ratione sequi, sunt incidunt magnam et. Delectus
                obcaecati optio eius error libero perferendis nesciunt atque
                dolores magni recusandae! Doloremque quidem error eum quis
                similique doloribus natus qui ut ipsum.Velit quos ipsa
                exercitationem, vel unde obcaecati impedit eveniet non. ”
              </p>
              <cite>
                Victoria Ventura<span>Customer</span>
              </cite>
            </div>
            <div className="slide2">
              <div className="img-div">
                <img src={User2} alt="" className="img-fluid" />
              </div>
              <p>
                “ Impedit, ratione sequi, sunt incidunt magnam et. Delectus
                obcaecati optio eius error libero perferendis nesciunt atque
                dolores magni recusandae! Doloremque quidem error eum quis
                similique doloribus natus qui ut ipsum.Velit quos ipsa
                exercitationem, vel unde obcaecati impedit eveniet non. ”
              </p>
              <cite>
                Victoria Ventura<span>Customer</span>
              </cite>
            </div>
          </Slider>
        </div>
        <div className="col-md-2"></div>
      </div>
      {/* Slick Slider */}
    </>
  );
};

export default Customer;
