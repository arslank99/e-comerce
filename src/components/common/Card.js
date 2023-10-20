import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
const Card = (props) => {
  const [Image, setImage] = useState(0);

  const { item } = props;
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-3">
        <div className="product">
          <div className="card" style={{ position: "relative" }}>
            <div className="card-body p-0" id="card-body1">
              <h4 className="circle-custom" style={{ position: "absolute" }}>
                <span class="badge mt-2 ms-2">Sale</span>
              </h4>

              <div
                onMouseOver={() => setImage(item.id)}
                onMouseOut={() => setImage(0)}
              >
                <img
                  src={Image === item.id ? item.mouseOverImage : item.image}
                  alt="arrow"
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="box">
                <button type="" className="btn btn-dark w-100">
                  add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="product-body text-center mt-2">
            <div className="product-cat">
              {item.category.map((category, index) => (
                <a href={category.slug} key={index}>
                  {category.name}
                </a>
              ))}
            </div>
            <h3 className="product-title">
              <a href="">{item.name}</a>
            </h3>
            <div className="product-price">
              <span className="new-price">{item.price}</span>
              <span className="old-price">{item.sale_price}</span>
            </div>
            <div className="ratings-container my-3">
              <div className="ratings">
                <div className="ratings-val"></div>
                <span className="tooltip-text">
                  {[...Array(item.ratings).keys()].map((star, index) => (
                    <FontAwesomeIcon icon={faStar} />
                  ))}
                </span>
              </div>
              <span className="ratings-text">({item.review})</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
