import React from "react";

const VillaPreview = ({ villaPrev, nextArrow, villaRenos }) => {
  return (
    <React.Fragment>
      <div className="preview-image-container">
        <img className="preview-image" src={villaPrev} />
      </div>
    </React.Fragment>
  );
};

export default VillaPreview;
