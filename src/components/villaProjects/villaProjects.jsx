import React from "react";
import { Route } from "react-router-dom";
import { villaRenos } from "./beforeAfters";
import Description from "./description";
import SideBar from "./sidebar";
import VillaPreview from "./villaPreview";
import Cemagi from "./cemagi";
import Loft from "./loft";
import TumbakBayuh from "./tumbakBayuh";

const VillaProjects = () => {
  return (
    <React.Fragment>
      <div className="preview-container">
        <div className="preview-card">
          {villaRenos.map((location) => (
            <div className="villa-card">
              <VillaPreview villaPrev={location.villaPreview} />
            </div>
          ))}
        </div>
        <SideBar />
        <Description />
        <Route path="/Villa Projects/cemagi" component={Cemagi} />
        <Route path="/Villa Projects/tumbakbayuh" component={TumbakBayuh} />
        <Route path="/Villa Projects/loft" component={Loft} />
      </div>
    </React.Fragment>
  );
};

export default VillaProjects;
