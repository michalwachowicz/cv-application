import React, { useEffect, useRef, useState } from "react";
import Container from "./components/layout/Container";
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Main from "./components/layout/Main";
import Preview from "./components/layout/Preview";
import DeletePopup from "./components/popups/DeletePopup";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [previewOpened, setPreviewOpened] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [deletedItem, setDeletedItem] = useState(null);
  const [data, setData] = useState({});

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

  const inputChangeHandler = (id, value) => {
    const newData = { ...data, [id]: value };

    localStorage.userData = JSON.stringify(newData);
    setData(newData);
  };

  const deleteHandler = (item) => {
    inputChangeHandler(item.id, item.list);
    setDeletedItem(null);
  };

  useEffect(() => {
    if (previewOpened) {
      previewRef.current.querySelector(".btn-close").focus();
    } else {
      mainRef.current.querySelector(".btn-preview").focus();
    }
  }, [previewOpened]);

  useEffect(() => {
    // Load theme preference from local storage
    const darkModeValue = localStorage.darkMode;

    if (darkModeValue === undefined) localStorage.darkMode = true;
    else setDarkMode(darkModeValue === "true");

    // Reset focusable element on page load
    const focusableElements = document.body.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length > 0) {
      const focusableElement = focusableElements[0];

      focusableElement.focus();
      focusableElement.blur();
    }

    // Load user data from local storage
    const dataValue = localStorage.userData;

    if (dataValue === undefined) localStorage.userData = JSON.stringify({});
    else setData(JSON.parse(dataValue));
  }, []);

  return (
    <Container darkMode={darkMode}>
      <Header darkMode={darkMode} onThemeSwitch={darkModeHandler} />

      <div className={`main-wrapper ${previewOpened ? "hidden" : ""}`}>
        <Navigation activePage={activePage} pages={pages} />
        <Main
          ref={mainRef}
          activePage={activePage}
          data={data}
          pages={pages}
          previewOpened={previewOpened}
          onInputChange={inputChangeHandler}
          onPreviewOpen={() => setPreviewOpened(true)}
          onPreviousPage={() => setActivePage(activePage - 1)}
          onNextPage={() => setActivePage(activePage + 1)}
          onDelete={(deleteId, newList) =>
            setDeletedItem({ id: deleteId, list: newList })
          }
        />
      </div>

      <Preview
        ref={previewRef}
        hidden={!previewOpened}
        onClose={() => setPreviewOpened(false)}
      />
      {deletedItem && (
        <DeletePopup
          item={deletedItem}
          onCancel={() => setDeletedItem(null)}
          onDelete={deleteHandler}
        />
      )}
    </Container>
  );
}

export default App;
