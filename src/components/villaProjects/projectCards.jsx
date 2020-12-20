import React from "react";
import ProjectDetails from "./projectDetails";

const ProjectCards = ({ scrollRef }) => {
  return (
    <React.Fragment>
      <div className="before-after-container">
        <div ref={scrollRef} className="project-card-container">
          <ProjectDetails />
        </div>
      </div>
      ;
    </React.Fragment>
  );
};

export default ProjectCards;
