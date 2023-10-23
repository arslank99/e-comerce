import React, { useState, useCallback, useEffect } from "react";
import "./Shop.css";
import List from "./List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGrip,
  faTableColumns,
  faTableCells,
  faHeart,
  faGlasses,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { productsData } from "../../ShopData";
import Grid2 from "./Grid2";
import Grid3 from "./Grid3";
import { useParams, useSearchParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Pagination from "../pagination/Pagination";

const Shop = () => {
  
  const [filters, setFilters] = useState({
    // Define your filter options here
    category: "",
    size: "",
    color: "",
    // Add more filters as needed
  });

  const [params, setParams] = useSearchParams();

  const category = params.get("category");
  const size = params.get("size");
  const colors = params.get("color");

  const [categoryData, setCategoryData] = useState([]);
  const [activeView, setActiveView] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("default");

  const HandleActiveView = (view) => {
    setActiveView(view);
  };

  // Category Filter useEffect
  useEffect(() => {
    const filtered = productsData.filter((product) => {
      return category ? product.category.some((cat) => cat.name === category)
        : product;
    });

    setCategoryData(filtered);
  }, [category]);

  // Size Filter useEffect
  useEffect(() => {
    const SizeFiter = productsData.filter((sizeCat) => {
      return size
        ? sizeCat.variants.some((varirant) => {
            return varirant.size.some((val) => val.name === size);
          })
        : sizeCat;
    });
    setCategoryData(SizeFiter);
  }, [size]);

  // Color Filter UseEffect
  useEffect(() => {
    const colorFilter = productsData.filter((color) => {
      return colors
        ? color.variants?.find((varColor) => varColor.color_name === colors)
        : color;
    });
    setCategoryData(colorFilter);
  }, [colors]);


  // Color Filter UseEffect
  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    // Apply filters to the original data
    let filteredResults = [...productsData];

    if (filters.category.length > 0) {
      filteredResults = filteredResults.filter(item =>
        filters.category.includes(item.category[0].name)
      );
    }


    // Update the filtered data state
    setCategoryData(filteredResults);
  };

  // pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 5;
  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const PostData = categoryData.slice(firstIndex, lastIndex);

  const paginate = (val) => {
    setCurrentPage(val);
  };

  return (
    <>
      <div id="shop">
        <div className="bg-layer">
          <div className="list-heading">
            <h2>List</h2>
            <h5>Shop</h5>
          </div>
        </div>
        {/* First Row Container*/}
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              <List
              filters={filters} 
              setFilters={setFilters}
              />
            </div>
            <div className="col-md-9">
              <div className="firstHeading">
                <h6>
                  Showing <span>5</span> of <span>35</span>
                </h6>
                <select className="form-select w-25" style={{ color: "#999" }}>
                  <option value="default">Default</option>
                  <option value="popular">Most Popular</option>
                  <option value="rated">Most Rated</option>
                </select>
                <div className="GridSystem">
                  <FontAwesomeIcon
                    icon={faTableColumns}
                    className={activeView === "default" ? "active" : ""}
                    onClick={() => HandleActiveView("default")}
                  />
                  <FontAwesomeIcon
                    icon={faGrip}
                    className={activeView === "grid" ? "active" : ""}
                    onClick={() => HandleActiveView("grid")}
                  />
                  <FontAwesomeIcon
                    icon={faTableCells}
                    className={activeView === "table" ? "active" : ""}
                    onClick={() => HandleActiveView("table")}
                  />
                </div>
              </div>
              {activeView === "default" &&
                PostData.map((product, index) => {
                  return (
                    <div
                      className="row py-2"
                      style={{
                        borderBottom: "1px solid lightgray",
                        overflow: "hidden",
                      }}
                    >
                      <div className="col-md-3" key={index}>
                        <NavLink to={`/product-detail/${product.id}`}>
                          <img
                            src={`https://d-themes.com/react_asset_api/molla/${product.sm_pictures[0]?.url}`}
                            alt=""
                            style={{ width: "230px", height: "250px" }}
                          />
                        </NavLink>
                      </div>
                      <div className="col-md-6">
                        <div className="product-body">
                          <div className="product-cats">
                            <a href="">{product.category[0].name}</a>
                          </div>
                          <div className="product-cats">
                            <a href="">
                              {product.category.some((product) => product.name)}
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="">{product.name}</a>
                          </h3>
                          <div className="product-content">
                            <p>{product.short_desc}</p>
                          </div>
                          <div className="product-nav product-nav-dots d-flex">
                            {product.variants?.map((ItemColor, ColorIndex) => {
                              return (
                                <div
                                  className="filter-colors"
                                  key={ColorIndex}
                                  style={{
                                    backgroundColor: ItemColor.color,
                                    borderRadius: "50%",
                                    width: "20px",
                                    height: "20px",
                                    marginRight: "12px",
                                  }}
                                ></div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="product-list-action">
                          <div className="product-price">
                            ${product.price}
                            {product.new}
                          </div>
                          <div className="ratings-container">
                            <div className="ratings">
                              <div className="ratings-val"></div>
                              <span className="tooltip-text">
                                {[...Array(product.ratings).keys()].map(
                                  (star, index) => (
                                    <FontAwesomeIcon
                                      icon={faStar}
                                      style={{ color: "#eea287" }}
                                    />
                                  )
                                )}
                              </span>
                            </div>
                            <span className="ratings-text">
                              {product.review}
                            </span>
                          </div>
                          <div className="product-action">
                            <FontAwesomeIcon icon={faGlasses} />
                            <button
                              className="btn-product btn-quickview"
                              title="Quick View"
                            >
                              <span>quick view</span>
                            </button>
                            <FontAwesomeIcon icon={faHeart} />
                            <a href="#" className="btn-product btn-wishlist">
                              <span>wishlist</span>
                            </a>
                          </div>
                          <a
                            className="btn-product btn-cart btn-select"
                            href=""
                          >
                            <span>select options</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              {/* Row 3 start */}
              {activeView === "grid" && <Grid2 data={PostData} />}
              {/* Row 3 start */}

              {/* Row 4 start */}
              {activeView === "table" && <Grid3 data={PostData} />}
              {/* Row 4 start */}

              {/* {console.log({ postPerPage, length: categoryData.length })} */}

              {/* Pagination Start Here */}
              <Pagination
                postPerPage={postPerPage}
                totalPost={categoryData.length}
                paginate={paginate}
              />
              {/* Pagination data End*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
