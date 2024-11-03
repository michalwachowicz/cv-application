import React, { useEffect, useState } from "react";
import Container from "./components/layout/Container";
import Header from "./components/layout/Header";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const darkModeHandler = () => {
    localStorage.darkMode = !darkMode;
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const darkModeValue = localStorage.darkMode;

    if (darkModeValue === undefined) localStorage.darkMode = true;
    else setDarkMode(darkModeValue === "true");
  }, []);

  return (
    <Container darkMode={darkMode}>
      <Header darkMode={darkMode} onThemeSwitch={darkModeHandler} />
    </Container>
  );
}

export default App;
