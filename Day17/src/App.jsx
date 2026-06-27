import React, { useState } from "react";
import UserContext from "./components/userContext";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  const user = "Nera";

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <UserContext.Provider value={user}>
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </UserContext.Provider>
    </div>
  );
};

export default App;