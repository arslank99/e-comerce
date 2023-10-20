import React from "react";
import { useRef } from "react";
import Logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
const Navbar = () => {
  const NavbarRef = useRef();
  const SearchRef = useRef();
  const SearchHandle = () => {
    SearchRef.current.classList.toggle("active");
    console.log(SearchRef);
  };
  const NavbarHandle = () => {
    NavbarRef.current.classList.toggle("active");
    console.log(NavbarRef);
  };
  return (
    <>
      <div id="navbar">
        <div className="container py-2">
          <div className="row">
            <div className="col-md-2">
              <FontAwesomeIcon
                icon={faBars}
                className="BarIcon"
                onClick={NavbarHandle}
              />
              <img src={Logo} alt="" className="img-fluid w-50" />
            </div>
            <div className="col-md-6" ref={NavbarRef}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/shop">shop</NavLink>
              <NavLink to="/about">about</NavLink>
              <NavLink to="/contact">contact</NavLink>
              <NavLink to="/login">login</NavLink>
            </div>
            <div className="col-md-4">
              <input
                type="search"
                name=""
                ref={SearchRef}
                placeholder="search product..."
                className="FocusColor"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="icon searchIcon"
                onClick={SearchHandle}
              />
              <FontAwesomeIcon icon={faHeart} className="icon" />
              <FontAwesomeIcon icon={faShoppingCart} className="icon" />
              <span>$00.00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
