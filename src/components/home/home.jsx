import React from "react";
import LandingPage from "./landing";
import About from "../about/about";
import Services from "../services/services";
import VillaProjects from "../villaProjects/villaProjects";

const Home = () => {
  return (
    <React.Fragment>
      <LandingPage />
      <About />
      <Services />
      <VillaProjects />
    </React.Fragment>
  );
};

export default Home;
