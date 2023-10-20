import React from "react";
import "./NewArrival.css";
import { banner } from "../../Data";
import Common from "./common";
const NewArrival = () => {
  return (
    <>
      <div className="container-fluid py-5 text-center">
        <div className="row">
          <div className="col-md-1"></div>
          {banner.map((ban, index) => {
            return (
              <>
                <div
                  className="col-sm-12 col-md-5 col-lg-5 mt-3 text-center"
                  key={index}
                >
                  <div className="banner-sect1 w-100">
                    <div className="overlay"></div>
                    <img src={ban.img} alt="" className="img-fluid w-100" />
                    <div className="banner-content">
                      <h4 className="banner-subtitle">
                        <a href="">New Arrivals</a>
                      </h4>
                      <h3 className="banner-title">
                        <a href="">{ban.title}</a>
                      </h3>
                      <a className="custom-btn" href="">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <div className="col-md-1"></div>;
        </div>
      </div>
    </>
  );
};

export default NewArrival;
