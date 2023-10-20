import React, { useState } from "react";
import "./Shop.css";
import { size, brand, colors } from "../../ListData";
import { productsData } from "../../ShopData";
import { useSearchParams } from "react-router-dom";
const List = (props) => {
  const [params, setParams] = useState([]);

  const addParam = (key, value) => {
    console.log(key, value);
    setParams({ category: value });
  };

  const quantites = {};
  let sizes = [];
  let colorName = [];
  let priceGet = [];

  productsData.forEach((product) => {
    product.category.forEach((category) => {
      // Category Name
      const categoryName = category.name;
      const existingCount = quantites[categoryName];

      //Category Name Existing
      if (existingCount) quantites[categoryName] = existingCount + 1;
      else quantites[categoryName] = 1;
    });

    //Size of Category
    product.variants?.forEach((variant) => {
      // Sizes Name
      variant.size.map(({ name }) => {
        sizes.push(name);
      });
    });

    // color category
    product.variants?.forEach((color) => {
      const ExistColorName = color.color_name;
      colorName.push(ExistColorName);
    });
  });

  sizes = [...new Set([...sizes])];
  colorName = [...new Set([...colorName])];

  const rangeData = () => {};
  return (
    <>
      <div className="shop-widget">
        <label>Filters:</label>
        <a className="sidebar-filter-clear" href="">
          Clean All
        </a>
      </div>
      <div className="UpClose">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Categories
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="widget-body pt-0">
                  <div className="filter-items filter-items-count">
                    {Object.entries(quantites).map(([key, value], i) => {
                      return (
                        <div
                          className="filter-item"
                          key={key}
                          style={{ cursor: "pointer" }}
                        >
                          <input
                            type="checkbox"
                            name=""
                            value=""
                            onClick={() => addParam("category", key)}
                          />
                          {key}
                          <span className="item-count"> {value}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Size
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="filter-items">
                  {sizes?.map((size) => {
                    return (
                      <div className="filter-item" key={size}>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            name="size"
                            id="size-1"
                            onClick={() => setParams({ size: size })}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="size-1"
                          >
                            {size}
                          </label>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Colors
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {colorName.map((color, index) => {
                  return (
                    <>
                      <div
                        className="color d-flex justify-content-between mt-2"
                        style={{ fontWeight: "600" }}
                      >
                        {color}
                        <button
                          className="filter-colors"
                          key={index}
                          style={{
                            background: color,
                            borderRadius: "50%",
                            width: "24px",
                            height: "24px",
                          }}
                          onClick={() => setParams({ color: color })}
                        ></button>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Price
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="filter-price">
                  <div className="filter-price-text d-flex justify-content-between">
                    <span>
                      <strong> Price Range : &nbsp;</strong>
                      <span className="filter-price-range">${priceGet}</span>
                    </span>
                  </div>
                  <div className="price-slider">
                    <form action="/action_page.php">
                      <input
                        type="range"
                        className="form-range"
                        id="customRange"
                        name="points"
                        onChange={() => rangeData()}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
