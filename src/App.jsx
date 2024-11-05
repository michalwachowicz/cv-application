import React, { useEffect, useRef, useState } from "react";
import Container from "./components/layout/Container";
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Main from "./components/layout/Main";
import Preview from "./components/layout/Preview";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [previewOpened, setPreviewOpened] = useState(false);
  const [activePage, setActivePage] = useState(0);

  const mainRef = useRef();
  const previewRef = useRef();

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
    if (previewOpened) {
      previewRef.current.querySelector(".btn-close").focus();
    } else {
      mainRef.current.querySelector(".btn-preview").focus();
    }
  }, [previewOpened]);

  useEffect(() => {
    const darkModeValue = localStorage.darkMode;

    if (darkModeValue === undefined) localStorage.darkMode = true;
    else setDarkMode(darkModeValue === "true");

    const focusableElements = document.body.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length > 0) {
      const focusableElement = focusableElements[0];

      focusableElement.focus();
      focusableElement.blur();
    }
  }, []);

  return (
    <Container darkMode={darkMode}>
      <Header darkMode={darkMode} onThemeSwitch={darkModeHandler} />

      <div className={`main-wrapper ${previewOpened ? "hidden" : ""}`}>
        <Navigation activePage={activePage} pages={pages} />
        <Main
          ref={mainRef}
          activePage={activePage}
          pages={pages}
          previewOpened={previewOpened}
          onPreviewOpen={() => setPreviewOpened(true)}
        />
      </div>

      <Preview
        ref={previewRef}
        hidden={!previewOpened}
        onClose={() => setPreviewOpened(false)}
      />
    </Container>
  );
}

export default App;
