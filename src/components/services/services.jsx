import React from "react";
import { Link } from "react-router-dom";
import Cards from "./cards";

const Services = ({ serviceRef }) => {
  return (
    <React.Fragment>
      <div ref={serviceRef} className="services-container">
        <div className="services">
          <div className="services-title-container">
            <h2 className="service-title">
              Services<span className="underline-1"></span>
            </h2>
          </div>
          <Cards />
          <div className="services-button-container">
            <Link to="/contact" className="s-button">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Services;
