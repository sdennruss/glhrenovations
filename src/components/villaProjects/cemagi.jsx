import React from "react";
import cemagi1 from "./assets/cemagi1.jpg";
import cemagi2 from "./assets/cemagi2.jpg";
import cemagi3 from "./assets/cemagi3.jpg";
import cemagi4 from "./assets/cemagi4.jpg";
import cemagi5 from "./assets/cemagi5.jpg";
import cemagi6 from "./assets/cemagi6.jpg";
import cemagi7 from "./assets/cemagi7.jpg";
import cemagi8 from "./assets/cemagi8.jpg";

const Cemagi = () => {
  return (
    <React.Fragment>
      <div className="tb-container">
        <div className="tb-gallery-1">
          <div className="tb-image-container">
            <img className="tb-image" src={cemagi1} />
          </div>
          <div className="tb-content-container">
            <div className="tb-description">
              <h2 className="cemagi">Bohiemian Rustic</h2>
            </div>

            <div className="tb-details">
              <p className="t-details">
                This hidden gem is perfect for couples or a single individual
                looking to escape the busy roads in Canggu. A slow-paced
                neighbourhood that is quite, and filled with rice paddy and
                ocean views. This up-and-coming area was said to be the next
                Canggu but with COVID coming into play around March 2020, that
                "upcoming Canggu" title has slowed down tremendously.{" "}
              </p>
            </div>
          </div>
          <div className="tb-location">
            <p className="tb">cemagi </p>
          </div>
        </div>
      </div>
      <div className="tb-container-2">
        <div className="tb-gallery-2">
          <div className="gallery-top-container">
            <div className="center-content-container">
              <p className="villa-features">Villa Features</p>
              <ul className="content-ul">
                <li className="center-content">1 bedroom + 1.5 bathrooms</li>
                <li className="center-content">
                  Two-storey villa with an open concept main floor. Seating area
                  on the left upon entry looking directly into the kitchen and
                  dining room space with a rice paddy view
                </li>

                <li className="center-content">
                  Kitchen equipped with an oven and refridgerator to whip up
                  bangin' meals
                </li>
                <li className="center-content">
                  Great endless amount of work from home space for those who
                  work remotely
                </li>
                <li className="center-content">
                  Master bedroom on the mainfloor with an ensuite bathroom
                </li>
              </ul>
            </div>
            <div className="top-l-image-container">
              <img className="l-image" src={cemagi2} />
            </div>
            <div className="top-r-image-container">
              <img className="r-image" src={cemagi3} />
            </div>
          </div>

          <div className="gallery-bottom-container">
            <div className="bottom-c-image-container">
              <img className="bc-image" src={cemagi4} />
            </div>
            <div className="bottom-r-image-container">
              <img className="br-image" src={cemagi5} />
            </div>
            <div className="left-content-container">
              <img className="br-image" src={cemagi8} />
            </div>
          </div>
        </div>
      </div>
      <div className="tb-container-3">
        <div className="tb-gallery-3">
          <div className="main-image-container">
            <img className="sub-image" src={cemagi7} />
          </div>
          <div className="sub-container">
            <div className="sub-image-container">
              <img className="main-image" src={cemagi6} />
            </div>

            <div className="sub-content-container">
              <p className="sub-content">
                The master bedroom can be found on the second floor with an
                outdoor terrace overlooking the ocean and rice paddys. Great
                spot to catch some sun or have a mid-day nap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cemagi;
