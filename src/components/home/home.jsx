import React from "react";
import LandingPage from "./landing";
import About from "../about/about";
import Services from "../services/services";

const Home = () => {
  return (
    <React.Fragment>
      <LandingPage />
      <About />
      <Services />
    </React.Fragment>
  );
};

export default Home;
