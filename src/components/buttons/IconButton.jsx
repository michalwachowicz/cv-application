import React from "react";

export default function IconButton({ label = "", onClick, children }) {
  return (
    <button
      type="button"
      className="btn btn-icon"
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
