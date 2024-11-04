import React, { useEffect, useState } from "react";
import Container from "./components/layout/Container";
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activePage, setActivePage] = useState(0);

  const pages = [
    { id: 0, title: "Personal" },
    { id: 1, title: "Experience" },
    { id: 2, title: "Download CV" },
  ];

  const darkModeHandler = () => {
    localStorage.darkMode = !darkMode;
    setDarkMode(!darkMode);
  };

  // TODO: Change active page
  // eslint-disable-next-line no-unused-vars
  const pageChangeHandler = (pageId) => {
    setActivePage(pageId);
  };

  useEffect(() => {
    const darkModeValue = localStorage.darkMode;

    if (darkModeValue === undefined) localStorage.darkMode = true;
    else setDarkMode(darkModeValue === "true");
  }, []);

  return (
    <Container darkMode={darkMode}>
      <Header darkMode={darkMode} onThemeSwitch={darkModeHandler} />
      <Navigation activePage={activePage} pages={pages} />
    </Container>
  );
}

export default App;
