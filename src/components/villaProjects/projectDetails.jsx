import React, { useState } from "react";
import cemagi from "./assets/cemagiafter.jpg";
import arrow from "./assets/arrow.png";
import { villaRenos } from "./beforeAfters";

const ProjectDetails = () => {
  const [changePhoto, setChangePhoto] = useState(0);
  const [beforePhoto, setBefore] = useState(villaRenos[changePhoto].after);

  const handleRightPhotoChange = (rightImage, afterImage) => {
    rightImage === 3 ? setChangePhoto(0) : setChangePhoto(rightImage);
    rightImage === 3
      ? setBefore(villaRenos[0].after)
      : setBefore(villaRenos[changePhoto + 1].after);
  };

  const handleLeftPhotoChange = (leftImage, beforeImage) => {
    leftImage === 2 ? setChangePhoto(0) : setChangePhoto(leftImage + 1);
    leftImage === 2
      ? setBefore(villaRenos[0].after)
      : setBefore(villaRenos[changePhoto + 1].after);
  };

  const handleBeforeAfterPhoto = (beforeafter) => {
    setBefore(beforeafter);
  };

  return (
    <React.Fragment>
      <div className="project-card">
        <div className="villa-name-container">
          <h2 className="villa-name">{villaRenos[changePhoto].villa}</h2>
        </div>

        <div className="villa-content-container">
          <div className="villa-image-container">
            <img className="villa-image" src={beforePhoto} />
          </div>

          <div className="villa-button-container">
            <a className="see-villa-button">See Villa</a>
            <a
              onClick={() =>
                handleBeforeAfterPhoto(villaRenos[changePhoto].before)
              }
              className="before-button"
            >
              Before
            </a>
            <a
              onClick={() =>
                handleBeforeAfterPhoto(villaRenos[changePhoto].after)
              }
              className="after-button"
            >
              After
            </a>
          </div>
        </div>

        <div className="next-button-container">
          <a
            onClick={() =>
              handleLeftPhotoChange(changePhoto, villaRenos[changePhoto].after)
            }
            className="next-button-left"
          >
            <img src={arrow} className="left-arrow" />
          </a>
          <a
            onClick={() =>
              handleRightPhotoChange(
                changePhoto + 1,
                villaRenos[changePhoto].after,
              )
            }
            className="next-button-right"
          >
            <img src={arrow} className="right-arrow" />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectDetails;
