import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ImageHover from "./ImageHover";

const Grid3 = (props) => {
  const [Image, setImage] = useState(0);
  const { data } = props;
  return (
    <>
      <div className="row d-flex">
        {data.map((grid, gridIndex) => {
          console.log(grid);
          return (
            <div className="col-md-4 my-2" key={gridIndex}>
              <ImageHover grid={grid} />
              <div className="product-body text-center mt-2">
                <div className="product-cat"></div>
                <h3 className="product-title">
                  <a href="">{grid.category[0].name}</a>
                </h3>
                <p
                  className="product-name"
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  {grid.slug}
                </p>
                <div className="product-price">
                  <span className="new-price">${grid.price}</span>
                </div>
                <div className="ratings-container my-3">
                  <div className="ratings">
                    <div className="ratings-val">
                      {[...Array(grid.ratings).keys()].map((star, index) => (
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#eea287" }}
                        />
                      ))}
                    </div>
                    <span className="tooltip-text">({grid.review})</span>
                  </div>
                </div>
                <div className="Colors d-flex justify-content-center ">
                  {grid.variants?.map((Color, ColIndex) => {
                    return (
                      <div
                        className="filter-color"
                        key={ColIndex}
                        style={{
                          backgroundColor: Color.color,
                          borderRadius: "50%",
                          width: "20px",
                          height: "20px",
                          marginRight: "10px",
                        }}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Grid3;
