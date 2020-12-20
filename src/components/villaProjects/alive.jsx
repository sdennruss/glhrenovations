import React from "react";
import alive1 from "./assets/alive1.jpg";

const Alive = () => {
  return (
    <React.Fragment>
      <div className="tb-container">
        <div className="tb-gallery-1">
          <div className="tb-image-container">
            <img className="tb-image" src={alive1} />
          </div>
          <div className="tb-content-container">
            <div className="tb-description">
              <h2 className="tumbak">Modern Meets Industrial</h2>
            </div>

            <div className="tb-details">
              <p>
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
            <p className="tb">Alive</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Alive;
