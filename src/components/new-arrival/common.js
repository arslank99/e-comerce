import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return (
    <>
      <section id="common">
        <h6>{props.subtitle}</h6>
        <h1>{props.title}</h1>
      </section>
    </>
  );
};

export default Common;
