import React, { useState, useRef } from "react";
import { Link, Route } from "react-router-dom";
import { villaRenos } from "./beforeAfters";
import Description from "./description";
import SideBar from "./sidebar";
import VillaPreview from "./villaPreview";
import Cemagi from "./cemagi";
import Loft from "./loft";
import TumbakBayuh from "./tumbakBayuh";
import Alive from "./alive";

const VillaProjects = () => {
  const [nextArrow, setNextArrow] = useState(0);

  const handleNextArrow = (next) => {
    setNextArrow(next);
    console.log(next);
  };

  const handleBackArrow = (back) => {
    back === -1 ? setNextArrow(0) : setNextArrow(back);
    console.log(back);
  };

  return (
    <React.Fragment>
      <div className="preview-container">
        <div className="preview-card">
          <div className={`villa-card`}>
            <VillaPreview villaPrev={villaRenos[nextArrow].villaPreview} />
          </div>
          <div className={`villa-card-middle`}>
            <VillaPreview villaPrev={villaRenos[nextArrow + 1].villaPreview} />
          </div>
          <div className={`villa-card`}>
            <VillaPreview villaPrev={villaRenos[nextArrow + 2].villaPreview} />
          </div>
          <div className="preview-arrows">
            <p
              onClick={() => handleBackArrow(nextArrow - 1)}
              className="pl-arrow"
            >{`{back}`}</p>
            <p
              onClick={() => handleNextArrow(+1)}
              className="pr-arrow"
            >{`{next}`}</p>
          </div>
        </div>
      </div>
      <div className="up-arrow">
        <Link className="up" to="/Villa Projects">
          Scroll Up
        </Link>
      </div>
      <div className="side-bar">
        <SideBar
          seeVilla={villaRenos[nextArrow].seeVilla}
          villa={villaRenos[nextArrow].villa}
        />
        <SideBar
          seeVilla={villaRenos[nextArrow + 1].seeVilla}
          villa={villaRenos[nextArrow + 1].villa}
        />
        <SideBar
          seeVilla={villaRenos[nextArrow + 2].seeVilla}
          villa={villaRenos[nextArrow + 2].villa}
        />
      </div>
      <div className="details-outer">
        <Description villa={villaRenos} nextArrow={nextArrow} />{" "}
      </div>

      <Route
        path="/Villa Projects/cemagi"
        render={(props) => <Cemagi {...props} />}
      />
      <Route
        path="/Villa Projects/tumbakbayuh"
        render={(props) => <TumbakBayuh {...props} />}
      />
      <Route
        path="/Villa Projects/loft"
        render={(props) => <Loft {...props} />}
      />
      <Route
        path="/Villa Projects/alive"
        render={(props) => <Alive {...props} />}
      />
    </React.Fragment>
  );
};

export default VillaProjects;
