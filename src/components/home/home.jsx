import React from "react";
import LandingPage from "./landing";
import About from "../about/about";

const Home = () => {
  return (
    <React.Fragment>
      <div className="homepage-container">
        <LandingPage />
        <About />
      </div>
    </React.Fragment>
  );
};

export default Home;
