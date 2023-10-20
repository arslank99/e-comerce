import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

const LoginComp = () => {
  return (
    <>
      <div className="tab-content mt-5">
        <div
          className="react-tabs__tab-panel react-tabs__tab-panel--selected"
          role="tabpanel"
          id="react-tabs-1"
          aria-labelledby="react-tabs-0"
        >
          <div>
            <form action="#">
              <div className="form-group">
                <label for="singin-email-2">Username or email address *</label>
                <input
                  type="text"
                  className="form-control"
                  id="singin-email-2"
                  name="singin-email"
                  required=""
                />
              </div>
              <div className="form-group">
                <label for="singin-password-2">Password *</label>
                <input
                  type="password"
                  className="form-control"
                  id="singin-password-2"
                  name="singin-password"
                  required=""
                />
              </div>
              <div className="form-footer">
                <button type="submit" className="btn btn-outline-primary-2">
                  <span>LOG IN</span>
                  <i className="icon-long-arrow-right"></i>
                </button>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="signin-remember-2"
                  />
                  <label
                    className="custom-control-label"
                    for="signin-remember-2"
                  >
                    Remember Me
                  </label>
                </div>
                <a className="forgot-link" href="">
                  Forgot Your Password?
                </a>
              </div>
            </form>
            <div className="form-choice">
              <p className="text-center">or sign in with</p>
              <div className="row text-center">
                <div className="col-sm-6">
                  <a className="btn btn-login btn-g" href="">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ marginRight: "12px", color: "#36c" }}
                    />
                    Login With Facebook
                  </a>
                </div>
                <div className="col-sm-6">
                  <a className="btn btn-login btn-f" href="">
                    <FontAwesomeIcon
                      icon={faGoogle}
                      style={{ marginRight: "12px", color: "#c33" }}
                    />
                    Login With Google
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="react-tabs__tab-panel"
          role="tabpanel"
          id="react-tabs-3"
          aria-labelledby="react-tabs-2"
        ></div>
      </div>
    </>
  );
};

export default LoginComp;
