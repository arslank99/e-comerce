import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";
import CImg1 from "../images/C-img-1.jpg";
import CImg2 from "../images/C-img-2.jpg";
const Contact = () => {
  return (
    <>
      <div id="contact">
        <div className="container">
          {/* row no.1 */}
          <div className="row">
            <div className="col-md-12">
              <div className="contact-bg">
                <div className="contact-heading">
                  <h1 className="page-title text-white">Contact us</h1>
                  <p className="text-white">Keep in Touch With Us</p>
                </div>
              </div>
            </div>
          </div>
          {/* row no.1 */}
          <div
            className="row my-5 custom-pad"
            style={{ borderBottom: "1px solid #8080804d" }}
          >
            {/* row no.2 */}
            <div className="col-md-6">
              <div className="missons">
                <h3 className="page-title">Contact Information</h3>
                <p className="">
                  Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                  euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus
                  pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
                </p>
              </div>
              <div className="row my-5">
                <div className="col-md-6">
                  <div className="contact-info">
                    <h3>The Office</h3>
                    <ul className="contact-list">
                      <FontAwesomeIcon icon={faLocation} className="setIcon" />
                      <li>
                        70 Washington Square South New York, NY 10012, United
                        States
                      </li>
                      <FontAwesomeIcon icon={faPhone} className="setIcon" />
                      <li>
                        <a href="tel:#">+92 423 567</a>
                      </li>
                      <FontAwesomeIcon icon={faEnvelope} className="setIcon" />
                      <li>
                        <a href="mailto:#">info@Molla.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-info">
                    <h3>The Office</h3>
                    <ul className="contact-list">
                      <FontAwesomeIcon icon={faClock} className="setIcon" />
                      <li>
                        <i className="icon-clock-o"></i>
                        <span>Monday-Saturday</span> <br />
                        11am-7pm ET
                      </li>
                      <FontAwesomeIcon icon={faCalendar} className="setIcon" />
                      <li>
                        <span>Sunday</span> <br />
                        11am-6pm ET
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="missons">
                <h3 className="page-title">Got Any Questions?</h3>
              </div>
              <form>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name *"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email *"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <textarea
                  className="form-control"
                  placeholder="Message *"
                  id="floatingTextarea2"
                  rows="5"
                ></textarea>

                <button type="submit" className="btn btn-outline-warning my-3">
                  Submit
                </button>
              </form>
            </div>
          </div>
          {/* row no.2 */}
        </div>
        <div className="container my-5">
          <h3 className="text-center my-5">Our Stores</h3>
          <div className="row">
            <div className="col-lg-6">
              <div className="store">
                <div className="row align-items-center">
                  <div className="col-sm-5 col-xl-6">
                    <figure className="store-media mb-2 mb-lg-0">
                      <img src={CImg2} alt="desc" className="w-100" />
                    </figure>
                  </div>
                  <div className="col-sm-7 col-xl-6">
                    <div className="store-content">
                      <h3 className="store-title">Wall Street Plaza</h3>
                      <address>88 Pine St, New York, NY 10005, USA</address>
                      <div className="store-link">
                        <a href="tel:#">+1 987-876-6543</a>
                      </div>
                      <h4 className="store-subtitle">Store Hours:</h4>
                      <div className="time">Monday - Saturday 11am to 7pm</div>
                      <div className="time">Sunday 11am to 6pm</div>
                      <a className="btn btn-link" href="">
                        <span>View Map</span>
                        <i className="icon-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="store">
                <div className="row align-items-center">
                  <div className="col-sm-5 col-xl-6">
                    <figure className="store-media mb-2 mb-lg-0">
                      <img src={CImg1} alt="desc" className="w-100" />
                    </figure>
                  </div>
                  <div className="col-sm-7 col-xl-6">
                    <div className="store-content">
                      <h3 className="store-title">Wall Street Plaza</h3>
                      <address>88 Pine St, New York, NY 10005, USA</address>
                      <div className="store-link">
                        <a href="tel:#">+1 987-876-6543</a>
                      </div>
                      <h4 className="store-subtitle">Store Hours:</h4>
                      <div className="time">Monday - Saturday 11am to 7pm</div>
                      <div className="time">Sunday 11am to 6pm</div>
                      <a className="btn btn-link" href="">
                        <span>View Map</span>
                        <i className="icon-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
