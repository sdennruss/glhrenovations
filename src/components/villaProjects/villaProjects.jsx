import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { villaRenos } from "./beforeAfters";
import Description from "./description";
import SideBar from "./sidebar";
import VillaPreview from "./villaPreview";
import Cemagi from "./cemagi";
import Loft from "./loft";
import TumbakBayuh from "./tumbakBayuh";
import Alive from "./alive";
import Canggu from "./canggu";

const VillaProjects = () => {
  const [nextArrow, setNextArrow] = useState(0);

  const handleNextArrow = (next) => {
    next === 3 ? setNextArrow(0) : setNextArrow(next);
    console.log(next);
  };

  const handleBackArrow = (back) => {
    back === -1 ? setNextArrow(2) : setNextArrow(back);
    console.log(back);
  };

  const scrollRef = useRef();

  function handleScroll() {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <React.Fragment>
      <div className="expand-transition"></div>

      <div id="top" className="preview-container">
        <div className="preview-card">
          <div className={`villa-card`}>
            <VillaPreview villaPrev={villaRenos[nextArrow].villaPreview} />
            <SideBar
              scrollRef={scrollRef}
              handleScroll={handleScroll}
              seeVilla={villaRenos[nextArrow].seeVilla}
              villa={villaRenos[nextArrow].villa}
            />
            <Description description={villaRenos[nextArrow].description} />
          </div>
          <div className={`villa-card-middle`}>
            <VillaPreview villaPrev={villaRenos[nextArrow + 1].villaPreview} />
            <SideBar
              scrollRef={scrollRef}
              handleScroll={handleScroll}
              seeVilla={villaRenos[nextArrow + 1].seeVilla}
              villa={villaRenos[nextArrow + 1].villa}
            />
            <Description description={villaRenos[nextArrow + 1].description} />
          </div>
          <div className={`villa-card`}>
            <VillaPreview villaPrev={villaRenos[nextArrow + 2].villaPreview} />
            <SideBar
              scrollRef={scrollRef}
              handleScroll={handleScroll}
              seeVilla={villaRenos[nextArrow + 2].seeVilla}
              villa={villaRenos[nextArrow + 2].villa}
            />
            <Description description={villaRenos[nextArrow + 2].description} />
          </div>
          <div className="preview-arrows">
            <p
              onClick={() => handleBackArrow(nextArrow - 1)}
              className="pl-arrow"
            >
              <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
            </p>
            <p
              onClick={() => handleNextArrow(nextArrow + 1)}
              className="pr-arrow"
            >
              <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
            </p>
          </div>
        </div>
      </div>
      <div className="up-arrow">
        <a className="up" href="top">
          Top
        </a>
      </div>

      <TumbakBayuh />
      <Cemagi />
      <Loft />
      <Alive />
      <Canggu />
    </React.Fragment>
  );
};

export default VillaProjects;
