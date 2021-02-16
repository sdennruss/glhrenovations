import React from "react";
import canggu1 from "./assets/canggu1.jpg";
import canggu2 from "./assets/canggu2.jpg";
import canggu3 from "./assets/canggu3.jpg";
import canggu4 from "./assets/canggu4.jpg";
import canggu5 from "./assets/canggu5.jpg";
import canggu6 from "./assets/canggu6.jpg";
import canggu7 from "./assets/canggu7.jpg";

const Canggu = ({ scrollRef }) => {
  return (
    <React.Fragment>
      <div id="canggu" className="tb-container">
        <div className="tb-gallery-1">
          <div className="tb-image-container">
            <img className="tb-image" src={canggu1} />
          </div>
          <div className="tb-content-container">
            <div className="tb-description">
              <h2 className="cemagi">Bali Aesthetics</h2>
            </div>

            <div className="tb-details">
              <p className="t-details">
                Here we have your typical Bali vibes villa. Two level space with
                a rooftop giving you an arieal view. A pool for your morning
                skinny dips, exposed wood, with all the fixing to make this a
                family home for you and your little ones. This space is best for
                3 mates or a young family looking for some peace and quiet.
              </p>
            </div>
          </div>
          <div className="tb-location">
            <p className="tb">canggu </p>
          </div>
        </div>
      </div>
      <div className="tb-container-2">
        <div className="tb-gallery-2">
          <div className="gallery-top-container">
            <div className="center-content-container">
              <p className="villa-features">Villa Features</p>
              <ul className="content-ul">
                <li className="center-content">3 bedrooms + 3 bathrooms</li>

                <li className="center-content">
                  Equipped kitchen with an oven and plenty of counter space
                  great for entertaining as it overlooks the seating and dining
                  room area
                </li>
                <li className="center-content">
                  Outdoor pool with sunbathing deck
                </li>
                <li className="center-content">
                  Lush green plants and more space in the back to create your
                  very own vegetable garden
                </li>
              </ul>
            </div>
            <div className="top-l-image-container">
              <img className="l-image" src={canggu2} />
            </div>
            <div className="top-r-image-container">
              <img className="r-image" src={canggu3} />
            </div>
          </div>

          <div className="gallery-bottom-container">
            <div className="bottom-c-image-container">
              <img className="bc-image" src={canggu4} />
            </div>
            <div className="bottom-r-image-container">
              <img className="br-image" src={canggu5} />
            </div>
            <div className="left-content-container">
              <p className="villa-features">More Details</p>

              <p className="sub-content-2">
                This was the very first villa I've renovated and has been very
                popular to rent as per the location is nearby everything.
                Ironically, it's near the Alive shop with the option to jump
                over to Batu Bolong, or Pererenan as it's situated on a small
                shortcut road.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="tb-container-3">
        <div className="tb-gallery-3">
          <div className="main-image-container">
            <img className="sub-image" src={canggu7} />
          </div>
          <div className="sub-container">
            <div className="sub-image-container">
              <img className="main-image" src={canggu6} />
            </div>

            <div className="sub-content-container">
              <p className="sub-content">
                The 1st bedroom is located on the right-hand side of the pool,
                near the kitchen. This bedroom features an ensuite bathroom as
                per each room in the villa and a spacious desk space area to
                work from home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Canggu;
