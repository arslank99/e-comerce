import React, { useEffect } from "react";
import "./HomeProducts.css";
import { useState } from "react";

import { products } from "../../ImagesData";
import Card from "../common/Card";
const HomeProducts = () => {
  const [filterProducts, setFilterProducts] = useState([]);

  const RenderProducts = (arg) => {
    let filtered = "";
    if (arg == "feature") {
      filtered = products.filter(({ featured }) => featured);
    } else if (arg == "top") {
      filtered = products.filter(({ top }) => top);
    } else {
      filtered = products.filter(({ sale_price }) => sale_price !== null);
    }
    setFilterProducts(filtered);
  };

  useEffect(() => {
    RenderProducts("featured");
  }, []);

  return (
    <>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-2"></div>
          <div
            className="col-md-8 d-flex justify-content-around align-content-center my-5"
            id="menu"
          >
            <button
              className="btn btn-outline-dark"
              onClick={() => RenderProducts("feature")}
            >
              Feature
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => RenderProducts("sale")}
            >
              On Sale
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => RenderProducts("top")}
            >
              Top Rated
            </button>
          </div>
          <div className="col-md-2"></div>
        </div>
        {/* Cards row  */}
        <div className="row">
          {filterProducts.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeProducts;
