import React from "react";
import { Link } from "react-scroll";

const SideBar = ({ seeVilla, villa }) => {
  return (
    <React.Fragment>
      <div className={`sub-link-${villa}`}>
        <div className="villa-links">
          <a className={`villa-${villa}`} href={`#${seeVilla}`}>
            <span className="villa-underline"></span>
            {villa}
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
