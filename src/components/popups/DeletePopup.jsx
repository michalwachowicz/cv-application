import React, { useEffect, useRef } from "react";
import { getFocusableElements } from "../../utils/focusUtils";

export default function DeletePopup({ item, onCancel, onDelete }) {
  const ref = useRef();
  const titleRef = useRef();

  useEffect(() => {
    const handleFocusTrap = (e) => {
      const focusableElements = getFocusableElements(ref.current);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleFocusTrap);
    if (titleRef.current) titleRef.current.focus();

    return () => document.removeEventListener("keydown", handleFocusTrap);
  }, []);

  return (
    <div className="popup-backdrop">
      <div
        ref={ref}
        className="card card-popup popup-popup"
        role="dialog"
        aria-modal="true"
        aria-label="Confirm delete"
      >
        <h2 ref={titleRef} className="popup-title" tabIndex="-1">
          Are you sure you want to delete this?
        </h2>
        <hr />
        <div className="popup-btns">
          <button
            type="button"
            className="btn btn-action btn-action-neutral"
            onClick={() => onCancel(item)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-action btn-action-negative"
            onClick={() => onDelete(item)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
