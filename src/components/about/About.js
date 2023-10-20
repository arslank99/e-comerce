import React from "react";
import "./About.css";
import Img1 from "../images/img-1.jpg";
import Img2 from "../images/img-2.jpg";
import { company } from "../../Data";
import MeetTeam from "./MeetTeam";
import Customer from "./Customer";
const About = () => {
  return (
    <>
      <div id="about">
        <div className="container mt-5">
          {/* row no.1 */}
          <div className="row">
            <div className="col-md-12">
              <div className="about-bg">
                <div className="about-heading">
                  <h1 className="page-title text-white">About us</h1>
                  <p className="text-white">Who we are</p>
                </div>
              </div>
            </div>
          </div>
          {/* row no.2 */}
          <div className="row my-5 custom-pad">
            {/* row no.2 */}
            <div className="col-md-6">
              <div className="missons">
                <h3 className="page-title ">Our Vision</h3>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                  nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                  pretium, ligula sollicitudin laoreet viverra, tortor libero
                  sodales leo, eget blandit nunc tortor eu nibh.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="missons">
                <h3 className="page-title">Our Mission</h3>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                  nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                  pretium, ligula sollicitudin laoreet viverra, tortor libero
                  sodales leo, eget blandit nunc tortor eu nibh.
                </p>
              </div>
            </div>
          </div>
          {/* row no.2 */}
          <div className="row my-5 custom-pad">
            {/* Row no.3 */}
            <div className="col-md-5 mb-3">
              <h2 className="title">Who We Are</h2>
              <p className="lead mb-3">
                Pellentesque odio nisi, euismod pharetra a ultricies <br />
                in diam. Sed arcu. Cras consequat
              </p>
              <p className="mb-4 text-secondary">
                Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
                sodales leo, eget blandit nunc tortor eu nibh. Suspendisse
                potenti. Sed egestas, ante et vulputate volutpat, uctus metus
                libero eu augue.
              </p>
              <a className="btn btn-outline-primary" href="">
                <span>VIEW OUR NEWS</span>
                <i className="icon-long-arrow-right"></i>
              </a>
            </div>
            <div className="col-md-6 offset-md-1 mb-3">
              <div class="about-images">
                <img src={Img2} alt="" className="about-img-back" />
                <img src={Img1} alt="" className="about-img-front" />
              </div>
            </div>
          </div>
          {/* Row no.3 */}
          <div
            className="row my-5 custom-pad"
            style={{ borderBottom: "1px solid #dcd7d7" }}
          >
            {/* Row no.4 */}
            <div className="col-md-5 mb-3">
              <h3 className="mb-3">
                The world's premium design brands in one destination.
              </h3>
              <p className="mb-4 text-secondary">
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nis.
              </p>
            </div>
            <div className="col-md-7 text-end">
              <div className="brands-display">
                <div className="row justify-content-center">
                  {company.map((image, index) => {
                    return (
                      <div className="col-6 col-sm-4" key={index}>
                        <div className="brand" href="">
                          <img
                            src={image.img}
                            alt="Brand Name"
                            width="100"
                            height="35"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* row 5 card image */}
          <MeetTeam />
          {/* row 5 card image */}
          {/* row 6 card image */}
          <Customer />
          {/* row 6 card image */}
        </div>
      </div>
    </>
  );
};

export default About;
