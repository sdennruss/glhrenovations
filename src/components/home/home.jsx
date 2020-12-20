import React, { useRef } from "react";
import LandingPage from "./landing";
import About from "../about/about";
import Services from "../services/services";
import ProjectCards from "../villaProjects/projectCards";

const Home = () => {
  const scrollRef = useRef();

  function handleScroll() {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <React.Fragment>
      <LandingPage handleScroll={handleScroll} />
      <About />
      <Services />
      <ProjectCards scrollRef={scrollRef} />
    </React.Fragment>
  );
};

export default Home;
