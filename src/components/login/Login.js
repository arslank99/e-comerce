import React, { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import Register from "./Register";
import LoginComp from "./LoginComp";

const Login = () => {
  const [open, setOpen] = useState("login");

  const OpenHandler = (arg) => {
    setOpen(arg);
  };
  return (
    <>
      <div id="login">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 my-5">
              <div className="card">
                <div className="card-body">
                  <div className="buttons">
                    <NavLink className={open == "login" ? "LogActive" : ""}>
                      <button
                        type="button"
                        onClick={() => OpenHandler("login")}
                      >
                        Login
                      </button>
                    </NavLink>
                    <NavLink className={open == "register" ? "LogActive" : ""}>
                      <button
                        type="button"
                        onClick={() => OpenHandler("register")}
                      >
                        Register
                      </button>
                    </NavLink>
                  </div>
                  {/* Login */}
                  {open == "login" && <LoginComp />}
                  {/* Login */}
                  {/* Register */}
                  {open == "register" && <Register />}
                  {/* Register */}
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
