import React from "react";
import ThemeButton from "../buttons/ThemeButton";

export default function Header({ darkMode, onThemeSwitch }) {
  return (
    <header className="header">
      <h1 className="header-title">CV Creator</h1>
      <ThemeButton darkMode={darkMode} onToggle={onThemeSwitch} />
    </header>
  );
}
