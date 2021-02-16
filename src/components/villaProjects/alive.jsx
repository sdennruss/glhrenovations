import React from "react";
import alive1 from "./assets/alive1.jpg";

const Alive = () => {
  return (
    <React.Fragment>
      <div id="alive" className="tb-container">
        <div className="tb-gallery-1">
          <div className="tb-image-container">
            <img className="tb-image" src={alive1} />
          </div>
          <div className="tb-content-container">
            <div className="tb-description">
              <h2 className="tumbak">Health & Wellness Organic Shop</h2>
            </div>

            <div className="tb-details">
              <p className="t-details">
                Fun facts. I was a partner of the Alive Wholefoods Store in
                Canggu 5 years ago and built it from the ground up. For more
                details on the aesthetics of the shop, feel free to visit Alive
                on Jl. Canggu Padang Linjong.{" "}
              </p>
            </div>
          </div>
          <div className="tb-location">
            <p className="tb">Alive</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Alive;
