import React, { useState } from "react";
import NavBar from "./navbar";

const Toggle = () => {
  const [expand, setExpand] = useState(false);
  const [close, setClose] = useState("toggle-trans");

  const handleToggle = (expand, closed) => {
    setExpand(expand);
    setExpand(closed);
  };

  return (
    <React.Fragment>
      <div className="hamburger-container">
        <div className="hamburger">
          <input
            onClick={() => handleToggle(!expand, "toggle-trans")}
            type="checkbox"
            id="menuToggle"
            checked={expand}
          />

          <label htmlFor="menuToggle" className="menuOpen">
            <div className="open"></div>
          </label>
        </div>
      </div>
      {expand && (
        <NavBar close={close} onToggle={handleToggle} expand={expand} />
      )}
    </React.Fragment>
  );
};

export default Toggle;
