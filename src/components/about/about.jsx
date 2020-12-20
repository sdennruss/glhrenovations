import React from "react";
import { Link } from "react-router-dom";
import GrantPic from "./Grant.jpg";

const About = () => {
  return (
    <React.Fragment>
      <div className="about-container">
        <div className="about-column">
          <div className="about-left">
            <div className="contractor-name">
              <h2 className="grants-name">
                Grant<span className="underline"></span>
              </h2>
            </div>

            <div className="about-bio">
              <p className="about-grant">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
              </p>
            </div>

            <div className="about-button">
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
