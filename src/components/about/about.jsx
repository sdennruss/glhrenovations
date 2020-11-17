import React from "react";
import GrantPic from "./Granite-1.jpg";

const About = () => {
  return (
    <React.Fragment>
      <div className="about-container">
        <div className="about-column">
          <div className="about-left">
            <h2 className="grants-name">Grant</h2>
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
          </div>
        </div>

        <div className="about-column">
          <div className="square-border"></div>
          <div className="grant-image">
            {" "}
            <img className="granite" src={GrantPic} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
