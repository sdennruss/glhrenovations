import React from "react";

const VillaPreview = ({ villaPrev }) => {
  return (
    <div className="preview-image-container">
      <img className="preview-image" src={villaPrev} />
    </div>
  );
};

export default VillaPreview;
