import React from "react";

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
