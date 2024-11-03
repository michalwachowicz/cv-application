import React, { useState } from "react";
import Container from "./components/layout/Container";
import Header from "./components/layout/Header";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Container darkMode={darkMode}>
      <Header
        darkMode={darkMode}
        onThemeSwitch={() => setDarkMode(!darkMode)}
      />
    </Container>
  );
}

export default App;
