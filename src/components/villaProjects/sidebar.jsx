import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ seeVilla, villa }) => {
  return (
    <React.Fragment>
      <div className={`sub-link-${villa}`}>
        <div className="villa-links">
          <Link to={`/Villa Projects/${seeVilla}`} className={`villa-${villa}`}>
            <span className="villa-underline"></span>
            {villa}
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
