import React from "react";
import tumbak1 from "./assets/tumbak1.jpg";
import tumbak2 from "./assets/tumbak2.jpg";
import tumbak3 from "./assets/tumbak3.jpg";
import tumbak4 from "./assets/tumbak4.jpg";
import tumbak5 from "./assets/tumbak5.jpg";
import tumbak6 from "./assets/tumbak6.jpg";
import tumbak7 from "./assets/tumbak7.jpg";

const TumbakBayuh = () => {
  return (
    <React.Fragment>
      <div className="tb-container">
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
                Australian born with an electrical background based in Bali
                discovering abandoned homes and shops and turning them into dime
                in a dozens for rental property purposes and popular health food
                stores such as the Alive Wholefoods Store located in Canggu,
                Bali. With almost 9 years renovating and desinging spaces, I’ve
                diversiveif myself as a One Man Show show tackling interior
                decorating, plumbing, and eletrical work.{" "}
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
              <p className="center-content">Center content</p>
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
              <p classNae="left-content">left content</p>
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
              <p>sub-container</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TumbakBayuh;
