import React from "react";
import tumbak1 from "./assets/tumbak1.jpg";
import tumbak2 from "./assets/tumbak2.jpg";
import tumbak3 from "./assets/tumbak3.jpg";
import tumbak4 from "./assets/tumbak4.jpg";
import tumbak5 from "./assets/tumbak5.jpg";
import tumbak6 from "./assets/tumbak6.jpg";
import tumbak7 from "./assets/tumbak7.jpg";
import tumbak8 from "./assets/tumbak8.jpg";

const TumbakBayuh = ({ scrollRef }) => {
  return (
    <React.Fragment>
      <div id="tumbakbayuh" className="tb-container">
        <div className="tb-gallery-1">
          <div className="tb-image-container">
            <img className="tb-image" src={tumbak1} />
          </div>
          <div className="tb-content-container">
            <div className="tb-description">
              <h2 className="tumbak">Modern Meets Industrial</h2>
            </div>

            <div className="tb-details">
              <p className="t-details">
                A villa with all the fixings if you're looking to escape your
                typical Bali house. The pairing of wooden pieces and metal
                fixings made this villa come together where modern meets
                industrial. This residential area is where families and
                individuals flock to for more peace and quiet. The photo's below
                highlight the duo in every inch of the villa.
              </p>
            </div>
          </div>
          <div className="tb-location">
            <p className="tb">Tumbak Bayuh</p>
          </div>
        </div>
      </div>
      <div className="tb-container-2">
        <div className="tb-gallery-2">
          <div className="gallery-top-container">
            <div className="center-content-container">
              <p className="villa-features">Villa Features</p>
              <ul className="content-ul">
                <li className="center-content">3 bedrooms + 3.5 bathrooms</li>
                <li className="center-content">
                  Open space concept on the main floor that flows into the
                  dining room, office space, living room area, and kitchen.
                  Great for entertaining
                </li>

                <li className="center-content">
                  Equipped kitchen with an oven and a deep double sink
                </li>
                <li className="center-content">
                  Outdoor pool with a sunbathing deck and outdoor shaded seating
                  area
                </li>
                <li className="center-content">
                  Lush green garden area surrounding the pool
                </li>
              </ul>
            </div>
            <div className="top-l-image-container">
              <img className="l-image" src={tumbak2} />
            </div>
            <div className="top-r-image-container">
              <img className="r-image" src={tumbak3} />
            </div>
          </div>

          <div className="gallery-bottom-container">
            <div className="bottom-c-image-container">
              <img className="bc-image" src={tumbak4} />
            </div>
            <div className="bottom-r-image-container">
              <img className="br-image" src={tumbak5} />
            </div>
            <div className="left-content-container">
              <img className="br-image" src={tumbak8} />
            </div>
          </div>
        </div>
      </div>
      <div className="tb-container-3">
        <div className="tb-gallery-3">
          <div className="main-image-container">
            <img className="sub-image" src={tumbak7} />
          </div>
          <div className="sub-container">
            <div className="sub-image-container">
              <img className="main-image" src={tumbak6} />
            </div>

            <div className="sub-content-container">
              <p className="sub-content">
                The master bedroom features an open-space ensuite that looks out
                to a reading nook and king size bed. The perfect space for a
                good nights rest as blackout curtains have been installed. Views
                of Mount Batur can be seen if the clouds are on their best
                behaviour.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TumbakBayuh;
