import React from "react";
import { useState } from "react";
const ImageHover = (props) => {
  const { grid } = props;
  const [ImageView, setImageView] = useState("front");
  return (
    <>
      <div
        className="Checker"
        onMouseOver={() => setImageView("back")}
        onMouseOut={() => setImageView("front")}
      >
        <img
          src={`https://d-themes.com/react_asset_api/molla/${
            ImageView == "front"
              ? grid.sm_pictures[0]?.url
              : grid.sm_pictures[1]?.url
          }`}
          alt="arrow"
          className="img-fluid"
          style={{ width: "500px", height: "400px", objectFit: "cover" }}
        />
        <div className="box">
          <button type="" className="btn btn-dark">
            add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageHover;
