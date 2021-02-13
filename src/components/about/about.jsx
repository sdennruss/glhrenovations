import React from "react";
import { Link } from "react-router-dom";
import GrantPic from "./Grant.jpg";

const About = ({ scrollRef, handleServiceScroll }) => {
  return (
    <React.Fragment>
      <div ref={scrollRef} className="about-container">
        <div className="about-column">
          <div className="about-left">
            <div className="contractor-name">
              <h2 className="grants-name">
                Grant<span className="underline"></span>
              </h2>
            </div>

            <div className="about-bio">
              <p className="about-grant">
                Aussie born, Bali based with 20 years of work experience as an
                eletrician. Touched on other trades such as plumbing and
                building which led to house design and renovations in Bali.
              </p>

              <p className="about-grant-2">
                With over 6 years of trial and tribulations, dodgey land offers,
                and finding my own suppliers, and workers, I'm now offering my
                services as a Contractor to help those looking to turn their
                concepts into reality and avoid bule pricing.
              </p>
            </div>

            <div onClick={handleServiceScroll} className="about-button">
              <Link className="a-button">Learn More</Link>
            </div>
          </div>

          <div className="about-right">
            <div className="grant-image">
              <img className="granite" src={GrantPic} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
