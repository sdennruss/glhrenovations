import React from "react";
import loft1 from "./assets/loft1.jpeg";
import loft2 from "./assets/loft2.jpeg";
import loft3 from "./assets/loft3.jpeg";
import loft4 from "./assets/loft4.jpg";
import loft5 from "./assets/loft5.jpeg";

const Loft = () => {
  return (
    <React.Fragment>
      <div className="tb-container">
        <div className="tb-gallery-1">
          <div className="tb-image-container">
            <img className="tb-image" src={loft1} />
          </div>
          <div className="tb-content-container">
            <div className="tb-description">
              <h2 className="cemagi">Modern Meets Industrial</h2>
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
            <p className="tb">loft </p>
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
              <p classNae="left-content">left content</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Loft;
