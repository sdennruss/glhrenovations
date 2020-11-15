import React, { useState } from "react";
import { Link } from "react-router-dom";
import vvcLogo from "./logo-2.png";
import NavBar from "./navbar";

const Toggle = () => {
  const [expand, setExpand] = useState(false);

  return (
    <React.Fragment>
      <div className="hamburger-container">

        <div className="vvc-logo">
          <Link to="/home">
            <img src={vvcLogo} className="brand-logo" />
          </Link>
        </div>
        <div className="hamburger">
          <input
            onClick={() => setExpand(!expand)}
            type="checkbox"
            id="menuToggle"
            checked={expand}
            onChange={() => setExpand(!expand)}
          />

          <label htmlFor="menuToggle" className="menuOpen">
            <div className="open"></div>
          </label>
        </div>
      </div>

      {expand && (
        <NavBar
          onToggle={setExpand}
          expand={expand}
        />
      )}
    </React.Fragment>
  );
};

export default Toggle;
