// eslint-disable-next-line import/no-unresolved
import closeIcon from "/close.svg";
import React from "react";

const Preview = React.forwardRef(({ hidden, onClose }, ref) => (
  <section
    ref={ref}
    className={`card card-preview ${hidden ? "hidden" : ""}`}
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
    {/* TODO: CV Preview */}
  </section>
));
export default Preview;
