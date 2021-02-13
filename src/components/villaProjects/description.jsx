import React from "react";
import SideBar from "./sidebar";

const Description = ({ description }) => {
  return (
    <React.Fragment>
      <div className="villa-details-container">
        <div className="villa-content-details">
          <p className="villa-description">{description}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Description;
