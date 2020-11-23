import React from "react";
import Cards from "./cards";

const Services = () => {
  return (
    <React.Fragment>
      <div className="services-container">
        <div className="services">
          <div className="services-title-container">
            <h2 className="service-title">
              Services<span className="underline-1"></span>
            </h2>
          </div>
          <Cards />
          <div className="services-button-container">
            <a className="s-button">Get in Touch</a>
          </div>
        </div>
        <div className="triangle"></div>
      </div>
    </React.Fragment>
  );
};

export default Services;
