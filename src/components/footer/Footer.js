import React from "react";
import "./Footer.css";
import Logo from "../images/logo-footer.png";
import Payement from "../images/payments.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faPinterest,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <div className="footer p-0">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="widget">
                <img src={Logo} className="img-fluid footer-logo" />
                <p className="mr-lg-5">
                  Praesent dapibus, neque id cursus ucibus, tortor neque egestas
                  augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                  Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
                  luctus, metus.
                </p>
                <div className="widget-about-info me-5">
                  <div className="row">
                    <div className="col-md-6">
                      <span className="widget-about-title">
                        Got Question? Call us 24/7
                      </span>
                      <br />
                      <a href="tel:123456789">+0123 456 789</a>
                    </div>
                    <div className="col-md-6">
                      <span className="widget-about-title">Payment Method</span>
                      <figure className="footer-payments">
                        <img src={Payement} alt="Payment methods" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="widget">
                <h4 className="widget-title">Information</h4>
                <ul className="widget-list">
                  <li>
                    <a href="">About Molla</a>
                  </li>
                  <li>
                    <a href="">How to shop on Molla</a>
                  </li>
                  <li>
                    <a href="">FAQ</a>
                  </li>
                  <li>
                    <a href="">Contact us</a>
                  </li>
                  <li>
                    <a href="">Log in</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="widget">
                <h4 className="widget-title">customer sevices</h4>
                <ul className="widget-list">
                  <li>
                    <a href="">Payment Methods</a>
                  </li>
                  <li>
                    <a href="">Money-back guarantee!</a>
                  </li>
                  <li>
                    <a href="">Returns</a>
                  </li>
                  <li>
                    <a href="">Shipping</a>
                  </li>
                  <li>
                    <a href="">Terms and conditions</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="widget">
                <h4 className="widget-title">My Account</h4>
                <ul className="widget-list">
                  <li>
                    <a href="">Sign In</a>
                  </li>
                  <li>
                    <a href="">View Cart</a>
                  </li>
                  <li>
                    <a href="">My Wishlist</a>
                  </li>
                  <li>
                    <a href="">Track My Order</a>
                  </li>
                  <li>
                    <a href="">Help</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Row 2nd start here */}
          <div className="row p-3" style={{ borderTop: "1px solid" }}>
            <div className="col-md-6 fix">
              <p className="footer-copyright">
                Copyright © 2023 Molla Store. All Rights Reserved.
              </p>
              <ul className="footer-menu">
                <li>
                  <a href="/react/molla/demo-8#">Terms Of Use</a>
                </li>
                <li>
                  <a href="/react/molla/demo-8#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="social-icons social-icons-color">
                <span className="social-label">Social Media</span>
                <FontAwesomeIcon icon={faFacebook} className="facebook" />
                <FontAwesomeIcon icon={faTwitter} className="twitter" />
                <FontAwesomeIcon icon={faLinkedin} className="linkdin" />
                <FontAwesomeIcon icon={faPinterest} className="pint" />
                <FontAwesomeIcon icon={faYoutube} className="youtube" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
