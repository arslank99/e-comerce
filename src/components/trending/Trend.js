import React from "react";
import "./Trend.css";
const Trend = () => {
  return (
    <>
      <div className="trend-banner my-5">
        <div className="container">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
              <div className="banner-text text-center">
                <div className="css-1b7c46">
                  <h6 className="banner-subtitle text-white">Trending</h6>
                  <h1 className="banner-title text-white">New League</h1>
                  <p className=" text-white">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros.
                  </p>
                  <a className="btn btn-outline-light" href="">
                    <span>Shop Now</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trend;
