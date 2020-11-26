import React from "react";
import cemagi from "./assets/cemagiafter.jpg";

const ProjectDetails = () => {
  return (
    <React.Fragment>
      <div className="project-card">
        <div className="villa-name-container">
          <h2 className="villa-name">cemagi</h2>
        </div>

        <div className="villa-content-container">
          <div className="villa-button-container">
            <a className="see-villa-button">See Villa</a>
            <a className="before-button">Before</a>
            <a className="after-button">After</a>
          </div>

          <div className="villa-image-container">
            <img className="villa-image" src={cemagi} />
          </div>
        </div>

        <div className="next-button-container">
          <a className="next-button-left">left</a>
          <a className="next-button-right">right</a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectDetails;
