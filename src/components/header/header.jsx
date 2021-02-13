import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../navbar/navbar";
import Logo from "./glhlogocircular.png";

const Header = () => {
  const [expand, setExpand] = useState(false);

  return (
    <React.Fragment>
      <div className="header-container">
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

        <div className="glh-name">
          <Link to="/home" className="grant-huddo">
            <h1 className="company-name">Renovations and Designs</h1>
          </Link>
        </div>

        <div className="glh-logo">
          <Link to="/home" className="glh">
            <img className="logo" src={Logo} />
          </Link>
        </div>
      </div>
      {expand && <NavBar onToggle={setExpand} expand={expand} />}
    </React.Fragment>
  );
};

export default Header;
