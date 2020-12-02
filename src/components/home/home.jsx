import React from "react";
import LandingPage from "./landing";
import About from "../about/about";
import Services from "../services/services";
import ProjectCards from "../villaProjects/projectCards";

const Home = () => {
  return (
    <React.Fragment>
      <LandingPage />
      <About />
      <Services />
      <ProjectCards />
    </React.Fragment>
  );
};

export default Home;
