import React, { useState } from "react";
import Header from "./components/layout/Header";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`page-wrapper ${darkMode ? "theme-dark" : ""}`}>
      <div className="container">
        <Header
          darkMode={darkMode}
          onThemeSwitch={() => setDarkMode(!darkMode)}
        />
      </div>
    </div>
  );
}

export default App;
