import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ onToggle, expand }) => {
  const navigations = ["Home", "Villa Projects", "Contact"];
  return (
    <React.Fragment>
      <div className="toggle-container">
        <nav className="toggle-navigation">
          {navigations.map((navigation) => (
            <ul key={navigation} className="navigation-list">
              <li className="navigation-items">
                <Link
                  onClick={() => onToggle(!expand)}
                  className="toggle-links"
                  to={`/${navigation}`}
                >
                  {navigation}
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
