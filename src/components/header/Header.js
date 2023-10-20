import React from "react";
import HeaderText from "./HeaderText";
import Card from "../card/Card";
import "./Header.css";
import HomeProducts from "../feature/HomeProducts";
import Trend from "../trending/Trend";
import NewArrival from "../new-arrival/NewArrival";
import Recent from "../recent-arrival/Recent";
import InfoCard from "../information/InfoCard";
import Instagram from "../instagram/Instagram";

const Header = () => {
  return (
    <>
      <div id="header">
        <HeaderText />
      </div>
      <div id="CardSection">
        <Card />
      </div>
      <div id="feature">
        <HomeProducts />
      </div>
      <div id="trend">
        <Trend />
      </div>
      <div id="NewArrival">
        <NewArrival />
      </div>
      <div id="RecentArrival">
        <Recent />
      </div>
      <div id="InfoCard">
        <InfoCard />
      </div>
      <div id="Instagram">
        <Instagram />
      </div>
    </>
  );
};

export default Header;
