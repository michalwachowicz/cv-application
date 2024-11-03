/* eslint-disable import/no-unresolved */
import React from "react";
import darkIcon from "/dark.svg";
import lightIcon from "/light.svg";

export default function ThemeButton({ darkMode, onToggle }) {
  return (
    <button
      className="btn btn-theme"
      type="button"
      role="switch"
      aria-checked={darkMode}
      aria-label={`Dark mode ${darkMode ? "enabled" : "disabled"}`}
      onClick={() => onToggle()}
    >
      <div className="btn-theme-toggle">
        <img
          className="btn-theme-toggle-icon"
          src={darkMode ? darkIcon : lightIcon}
          alt=""
        />
      </div>
    </button>
  );
}
