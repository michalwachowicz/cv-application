import React from "react";

export default function Container({ darkMode, children }) {
  return (
    <div className={`page-wrapper ${darkMode ? "theme-dark" : ""}`}>
      <div className="container">{children}</div>
    </div>
  );
}
