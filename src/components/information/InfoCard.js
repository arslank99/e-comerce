import React from "react";
import "./InfoCard.css";
import { card } from "../../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const InfoCard = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {card.map((value, index) => {
            return (
              <div className="col-md-4" key={index}>
                <div className="card px-5">
                  <div className="css-cesu44">
                    <div className="text-center">
                      <div className="box-content">
                        <span>
                          <FontAwesomeIcon icon={value.icon} />
                        </span>
                        <h4 className="box-title">{value.title}</h4>
                        <p>{value.paragraph}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default InfoCard;
