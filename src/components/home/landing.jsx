import React from "react";
import { Link } from "react-router-dom";
import CangguPool from "./tumbak2.jpg";

const LandingPage = ({ handleScroll }) => {
  return (
    <React.Fragment>
      <div className="expand-transition"></div>
      <div className="landing-container">
        <div className="pinterest-contact">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.pinterest.com.au/ghuddo4674/glh-renovations/"
            className="pinterest-account"
          >
            Pinterest
          </a>
        </div>

        <div className="canggu-image-container">
          <div style={{ width: 3000, height: 621 }} className="pool-div">
            <img className="canggu-pool" src={CangguPool} />
          </div>
          <div className="reno-container">
            <div className="reno-title">
              <h2 className="reno">GLH Renovations </h2>
            </div>
            <div className="reno-location">
              <p className="r-location">Bali</p>
            </div>

            <div className="reno-description">
              <p className="r-descrip">
                A design and renovations company that doesn’t triple your budget
                because you’re a bule.
              </p>
            </div>

            <div className="view-project">
              <p onClick={handleScroll} className="view-canggu">
                View Before & Afters
              </p>
            </div>
          </div>
        </div>

        <div className="email-contact">
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=info@glhrenovations.com&su=Renovation Inquiry&shva=1"
            target="_blank"
            rel="noopener noreferrer"
            className="glh-email"
          >
            info@glhrenovations.com
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
