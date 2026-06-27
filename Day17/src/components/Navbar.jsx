import React from "react";
import Profile from "./Profile";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <h2>Navbar</h2>

      <Profile />

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? " Light" : " Dark"}
      </button>
    </div>
  );
};

export default Navbar;