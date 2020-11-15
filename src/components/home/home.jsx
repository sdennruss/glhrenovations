import React from "react";
import LandingPage from "./landing";
import Header from "./header";

const Home = () => {
  return (
    <React.Fragment>
      <div className="homepage-container">
        <LandingPage />
      </div>
    </React.Fragment>
  );
};

export default Home;
