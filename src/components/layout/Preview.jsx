/* eslint-disable import/no-unresolved */
import React from "react";
import PreviewDocument from "./PreviewDocument";
import closeIcon from "/close.svg";

const Preview = React.forwardRef(({ data, onClose }, ref) => (
  <section
    ref={ref}
    className="card card-preview"
    id="preview-cv"
    role="dialog"
    aria-modal="true"
    aria-labelledby="preview-title"
  >
    <header className="card-header">
      <h2 className="card-title" id="preview-title">
        Preview CV
      </h2>
      <button
        className="btn btn-close"
        type="button"
        aria-label="Close CV Preview"
        onClick={onClose}
      >
        <img className="btn-close-img" src={closeIcon} alt="" />
      </button>
    </header>
    <PreviewDocument data={data} />
  </section>
));
export default Preview;
