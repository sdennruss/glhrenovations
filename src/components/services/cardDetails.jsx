import React from "react";

const CardDetails = ({ number, type, description, service }) => {
  return (
    <React.Fragment>
      <div className={`card-${service}`}>
        <div className={`service-number-${service}`}>
          <h2 className="s-number">{number}</h2>
        </div>
        <div className={`service-type-${service}`}>
          <p className="s-type">{type}</p>
        </div>

        <div className={`service-description-${service}`}>
          <p className="s-description">{description}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardDetails;
