import React from "react";
import CangguPool from "./canggufront2.jpg";

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className="landing-container">
        <div className="pinterest-contact">
          <a className="pinterest-account">Pinterest</a>
        </div>

        <div className="canggu-image-container">
          <img className="canggu-pool" src={CangguPool} />
        </div>

        <div className="email-contact">
          <div className="glh-email">hello@glh.com</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
