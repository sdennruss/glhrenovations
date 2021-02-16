import React from "react";
import loft1 from "./assets/loft1.jpeg";
import loft2 from "./assets/loft2.jpeg";
import loft3 from "./assets/loft3.jpeg";
import loft4 from "./assets/loft4.jpg";
import loft5 from "./assets/loft5.jpeg";

const Loft = ({ scrollRef }) => {
  return (
    <React.Fragment>
      <div id="loft" className="tb-container">
        <div className="tb-gallery-1">
          <div className="tb-image-container">
            <img className="tb-image" src={loft1} />
          </div>
          <div className="tb-content-container">
            <div className="tb-description">
              <h2 className="cemagi">Industrial Loft</h2>
            </div>

            <div className="tb-details">
              <p className="t-details">
                The loft space is hovered on the second floor of a Warung with
                an open space concept and abandance of natural light (*wink
                wink* lower electricity bill). This industrial design has
                exposed wood, white pillars, and exposed metals all across the
                loft. Two mates or a single individual is best suited for this
                loft. Photos below will explain why!
              </p>
            </div>
          </div>
          <div className="tb-location">
            <p className="tb">loft </p>
          </div>
        </div>
      </div>
      <div className="tb-container-2">
        <div className="tb-gallery-2">
          <div className="gallery-top-container">
            <div className="center-content-container">
              <p className="villa-features">Villa Features</p>
              <ul className="content-ul">
                <li className="center-content">2 bedrooms + 1 bathroom</li>
                <li className="center-content">
                  Massive dining room table fit for having meals and/or
                  converting it into your very own work from home space
                </li>

                <li className="center-content">
                  Equipped kitchen with a stove, smart refridgerator and deep
                  circular sink
                </li>
                <li className="center-content">
                  Plenty of air circulation for warm days
                </li>
                <li className="center-content">
                  360 degree views great for sunset and sunrise
                </li>
              </ul>
            </div>
            <div className="top-l-image-container">
              <img className="l-image" src={loft2} />
            </div>
            <div className="top-r-image-container">
              <img className="r-image" src={loft3} />
            </div>
          </div>

          <div className="gallery-bottom-container">
            <div className="bottom-c-image-container">
              <img className="bc-image" src={loft4} />
            </div>
            <div className="bottom-r-image-container">
              <img className="br-image" src={loft5} />
            </div>
            <div className="left-content-container">
              <p className="villa-features">More Details</p>

              <p className="sub-content-2">
                The second bedroom was a new addition to the loft and the best
                room to sleep in if you prefer natural winds and no AC (AC
                installed for dry season). This room will provide you with
                morning sunrise views and chirping birds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Loft;
