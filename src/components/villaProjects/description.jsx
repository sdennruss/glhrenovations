import React from "react";
import { villaRenos } from "./beforeAfters";

const Description = () => {
  return (
    <React.Fragment>
      <div className="villa-details-container">
        {villaRenos.map((villa) => (
          <div className="villa-content-details">
            <p className="villa-description">{villa.description}</p>
            <p className="villa-availability">{villa.availability}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Description;
