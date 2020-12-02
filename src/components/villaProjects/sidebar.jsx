import React from "react";
import { Link } from "react-router-dom";
import { villaRenos } from "./beforeAfters";

const SideBar = () => {
  return (
    <React.Fragment>
      <div className="sub-link-container">
        {villaRenos.map((location) => (
          <div className="villa-links">
            <Link
              to={`/Villa Projects/${location.seeVilla}`}
              className="villas"
            >
              {location.villa}
            </Link>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default SideBar;
