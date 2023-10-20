import React from "react";
import CardSlide from "./CardSlide";
import "./card.css";
const Card = () => {
  return (
    <>
      <div className="container py-3">
        <div className="row gx-2">
          <div className="col-sm-12 col-md-6 col-lg-4 p-2">
            <div className="img-container">
              <div className="overlay"></div>
              <div className="banner-content">
                <h4 className="banner-subtitle">
                  <a href="">Final reduction</a>
                </h4>
                <h3 className="banner-title">
                  <a href="">
                    <strong>
                      Sandals &amp; <br />
                      Flip Flops
                    </strong>
                    <br />
                    up to 60% off
                  </a>
                </h3>
                <button className="" href="">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 p-2">
            <div className="img-container2">
              <div className="overlay"></div>
              <div className="banner-content">
                <h4 className="banner-subtitle">
                  <a href="">Final reduction</a>
                </h4>
                <h3 className="banner-title">
                  <a href="">
                    <strong>
                      Sandals &amp; <br />
                      Flip Flops
                    </strong>
                    <br />
                    up to 60% off
                  </a>
                </h3>
                <button className="" href="">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 p-2">
            <div className="img-container3">
              <div className="overlay"></div>
              <div className="banner-content">
                <h4 className="banner-subtitle">
                  <a href="">Final reduction</a>
                </h4>
                <h3 className="banner-title">
                  <a href="">
                    <strong>
                      Sandals &amp; <br />
                      Flip Flops
                    </strong>
                    <br />
                    up to 60% off
                  </a>
                </h3>
                <button className="" href="">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Slider Row 2  */}
        <div
          className="row py-5"
          style={{
            borderBottom: "1px solid #a9a9a961",
            padding: "20px",
          }}
        >
          <div className="col-md-12">
            <CardSlide />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
