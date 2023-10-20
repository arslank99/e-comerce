import React from "react";
import HeadImg from "../images/img-1.png";
import HeadImg2 from "../images/img-2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

const HeaderText = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Slider {...settings}>
              <div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                      <div className="banner-text">
                        <h3 class="intro-subtitle">Limited time only *</h3>
                        <h1 class="intro-title">
                          Summer
                          <br />
                          <strong>sale</strong>
                        </h1>
                        <h3 class="intro-subtitle">Up to 50% off</h3>
                        <a
                          class="btn btn-outline-dark px-5 mt-3 text-uppercase"
                          href=""
                        >
                          <span>Shop Now</span>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="banner-img w-100" id="dspImg">
                        <img src={HeadImg} alt="" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-md-1"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                      <div className="banner-img w-100">
                        <img
                          src={HeadImg2}
                          alt=""
                          className="img-fluid"
                          style={{ height: "787px" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="banner-text2">
                        <h3 className="intro-subtitle">premium quality</h3>
                        <h1 className="intro-title2">
                          coats <span class="highlight">&amp;</span>
                          <br />
                          jackets
                        </h1>

                        <a
                          className="btn btn-outline-dark px-5 mt-3 text-uppercase"
                          href=""
                        >
                          <span>Shop Now</span>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-1"></div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderText;
