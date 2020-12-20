import React from "react";

const Description = ({ nextArrow, villa }) => {
  return (
    <React.Fragment>
      <div className="villa-details-container">
        <div className="villa-content-details">
          <p className="villa-description">{villa[nextArrow].description}</p>
          <p className="villa-availability">{villa[nextArrow].availability}</p>
        </div>

        <div className="villa-content-details">
          <p className="villa-description">
            {villa[nextArrow + 1].description}
          </p>
          <p className="villa-availability">
            {villa[nextArrow + 1].availability}
          </p>
        </div>

        <div className="villa-content-details">
          <p className="villa-description">
            {villa[nextArrow + 2].description}
          </p>
          <p className="villa-availability">
            {villa[nextArrow + 2].availability}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Description;
