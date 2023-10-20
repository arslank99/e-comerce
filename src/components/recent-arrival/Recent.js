import React, { useEffect, useState } from "react";
import "./Recent.css";
import { products } from "../../ImagesData";
import Card from "../common/Card";
const Recent = () => {
  const [filterProducts, setFilterProducts] = useState([]);
  const RecentArrival = (argument) => {
    let filtered = "";
    if (argument == "all") {
      filtered = products;
    } else if (argument == "women") {
      filtered = products.filter((cat) => {
        return cat.category.some((cat) => cat.slug === argument);
      });
    } else if (argument == "men") {
      filtered = products.filter((cat) => {
        return cat.category.some((cat) => cat.slug === argument);
      });
    } else if (argument == "shoes") {
      filtered = products.filter((cat) => {
        return cat.category.some((cat) => cat.slug === argument);
      });
    }
    setFilterProducts(filtered);
    console.log(filtered);
  };

  useEffect(() => {
    RecentArrival("men");
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 text-center">
            <h1>Recent Arrival</h1>
            <div className="buttons">
              <button
                className="btn btn-outline-dark"
                onClick={() => RecentArrival("all")}
              >
                All
              </button>
              <button
                className="btn btn-outline-dark"
                onClick={() => RecentArrival("women")}
              >
                Women
              </button>
              <button
                className="btn btn-outline-dark"
                onClick={() => RecentArrival("men")}
              >
                Men
              </button>
              <button
                className="btn btn-outline-dark"
                onClick={() => RecentArrival("shoes")}
              >
                Shoes & Boots
              </button>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row my-5">
          {filterProducts.map((item, index) => {
            return <Card item={item} key={index} />;
          })}
          <div className="viewBtn text-center  mt-3">
            <button type="" className="btn btn-outline-dark">
              View More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recent;
