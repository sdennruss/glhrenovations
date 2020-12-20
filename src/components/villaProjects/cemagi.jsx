import React from "react";
import cemagi1 from "./assets/cemagi1.jpg";
import cemagi2 from "./assets/cemagi2.jpg";
import cemagi3 from "./assets/cemagi3.jpg";
import cemagi4 from "./assets/cemagi4.jpg";
import cemagi5 from "./assets/cemagi5.jpg";
import cemagi6 from "./assets/cemagi6.jpg";
import cemagi7 from "./assets/cemagi7.jpg";

const Cemagi = ({ scrollRef }) => {
  return (
    <React.Fragment>
      <div ref={scrollRef} className="tb-container">
        <div className="tb-gallery-1">
          <div className="tb-image-container">
            <img className="tb-image" src={cemagi1} />
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
            <p className="tb">cemagi </p>
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
              <p classNae="left-content">left content</p>
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
              <p>sub-container</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cemagi;
