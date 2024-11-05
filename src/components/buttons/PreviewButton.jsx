/* eslint-disable import/no-unresolved */
import React from "react";
import previewIcon from "/preview.svg";

export default function PreviewButton({ opened, onOpen }) {
  return (
    <button
      className="btn btn-preview"
      type="button"
      aria-label="Open CV Preview"
      aria-controls="preview-cv"
      aria-expanded={opened}
      onClick={onOpen}
    >
      <img className="btn-preview-img" src={previewIcon} alt="" />
    </button>
  );
}
