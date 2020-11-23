import React, { useState } from "react";
import NavBar from "../navbar/navbar";
import Logo from "./glhlogo.png";

const Header = () => {
  const [expand, setExpand] = useState(false);

  return (
    <React.Fragment>
      <div className="header-container">
        <div className="glh-logo">
          <img className="logo" src={Logo} />
        </div>

        <div className="glh-name">
          <h1 className="company-name">GLH Renovations</h1>
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
      {expand && <NavBar onToggle={setExpand} expand={expand} />}
    </React.Fragment>
  );
};

export default Header;
