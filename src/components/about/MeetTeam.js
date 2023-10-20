import React from "react";
import { member } from "../../Data";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const MeetTeam = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center">Meet Our Team</h3>
        </div>
      </div>
      <div className="row custom-pad">
        {member.map((card, CardIndex) => {
          return (
            <div className="col-md-4" key={card.id}>
              <div className="text-container">
                <img
                  className="w-100 img-fluid"
                  src={card.img}
                  alt="Card image cap"
                />
                <div className="overlayImage">
                  <div className="member-overlay-content">
                    <h3 className="member-title">
                      {card.name}
                      <span>
                        <br />
                        {card.profession}
                      </span>
                    </h3>
                    <p>
                      Sed pretium, ligula sollicitudin viverra, tortor libero
                      sodales leo, eget blandit nunc.
                    </p>
                    <div className="social-icons text-center">
                      <FontAwesomeIcon icon={faFacebook} />
                      <FontAwesomeIcon icon={faTwitter} />
                      <FontAwesomeIcon icon={faInstagram} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MeetTeam;
