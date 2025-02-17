import React, { useState } from "react";

const SideBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };
  return (
    <div className={`SideBar ${showSidebar ? "toggled" : ""}`}>
      <button onClick={toggleSidebar}>show</button>
    </div>
  );
};

export default SideBar;
