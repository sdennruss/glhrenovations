import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ onToggle, expand, close }) => {
  const navigations = ["Home", "Villa Projects", "Contact"];

  return (
    <React.Fragment>
      <div className={"toggle-container menuEffects"}>
        <nav className="toggle-navigation">
          {navigations.map((navigation) => (
            <ul key={navigation} className="navigation-list">
              <li className="navigation-items">
                <Link
                  onClick={() => onToggle(!expand, "toggle-trans")}
                  className={`toggle-links-${navigation}`}
                  to={`/${navigation}`}
                >
                  <span className={`underline-${navigation}`}>
                    {navigation}
                  </span>
                </Link>
              </li>
            </ul>
          ))}
        </nav>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
