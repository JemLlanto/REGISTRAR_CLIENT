import React, { useState } from "react";

const NavBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };
  return (
    <div className={`navBar ${showSidebar ? "toggled" : ""}`}>
      <button onClick={toggleSidebar}>show</button>
    </div>
  );
};

export default NavBar;
