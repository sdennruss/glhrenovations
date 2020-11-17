import React from "react";
import { Link } from "react-router-dom";
import CangguPool from "./canggufront2.jpg";

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className="landing-container">
        <div className="pinterest-contact">
          <Link className="pinterest-account">Pinterest</Link>
        </div>
        <div className="canggu-image">
          <img className="canggu-front" src={CangguPool} />
        </div>
        <div className="glh-email">hello@glh.com</div>
      </div>
      <div className="footer-container">
        <p className="glh-number">+16474692532</p>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
