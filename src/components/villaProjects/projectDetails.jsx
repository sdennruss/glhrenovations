import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "./assets/arrow.png";
import { villaRenos } from "./beforeAfters";

const ProjectDetails = () => {
  const [changePhoto, setChangePhoto] = useState(0);
  const [beforePhoto, setBefore] = useState(villaRenos[changePhoto].after);
  const [goGreen, setGoGreen] = useState("before-button");
  const [goGreenAfter, setGoGreenAfter] = useState("after-button");

  const handleRightPhotoChange = (rightImage, green, black) => {
    rightImage === 3 ? setChangePhoto(0) : setChangePhoto(rightImage);
    rightImage === 3
      ? setBefore(villaRenos[0].after)
      : setBefore(villaRenos[changePhoto + 1].after);
    setGoGreenAfter(green);
    setGoGreen(black);
  };

  const handleLeftPhotoChange = (leftImage, green, black) => {
    leftImage === 2 ? setChangePhoto(0) : setChangePhoto(leftImage + 1);
    leftImage === 2
      ? setBefore(villaRenos[0].after)
      : setBefore(villaRenos[changePhoto + 1].after);
    setGoGreenAfter(green);
    setGoGreen(black);
  };

  const handleBeforePhoto = (beforeafter, green, black) => {
    setBefore(beforeafter);
    setGoGreen(green);
    setGoGreenAfter(black);
    console.log("before button clicked");
  };

  const handleAfterPhoto = (beforeafter, black, green) => {
    setBefore(beforeafter);
    setGoGreen(black);
    setGoGreenAfter(green);

    console.log("after button clicked");
  };

  return (
    <React.Fragment>
      <div className="project-card">
        <div className="before-after-title">
          <h2 className="b-a-title">
            Before and Afters <span className="underline-1"></span>
          </h2>
        </div>
        <div className="villa-name-container">
          <p className="villa-name">{villaRenos[changePhoto].villa}</p>
        </div>

        <div className="villa-content-container">
          <div className="villa-image-container">
            <img className="villa-image" src={beforePhoto} />
          </div>

          <div className="villa-button-container">
            <div className="button-inner">
              <Link
                to={`/Villa Projects/${villaRenos[changePhoto].seeVilla}`}
                className="see-villa-button"
              >
                See Villa
              </Link>
              <a
                onClick={() =>
                  handleBeforePhoto(
                    villaRenos[changePhoto].before,
                    "go-green",
                    "go-green-after ",
                  )
                }
                className={goGreen}
              >
                Before
              </a>
              <a
                onClick={() =>
                  handleAfterPhoto(
                    villaRenos[changePhoto].after,
                    "before-button",
                    "after-button",
                  )
                }
                className={goGreenAfter}
              >
                After
              </a>
            </div>
          </div>
        </div>

        <div className="next-button-container">
          <a
            onClick={() =>
              handleLeftPhotoChange(
                changePhoto,
                "after-button",
                "before-button",
              )
            }
            className="next-button-left"
          >
            <img src={arrow} className="left-arrow" />
          </a>
          <a
            onClick={() =>
              handleRightPhotoChange(
                changePhoto + 1,
                "after-button",
                "before-button",
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
