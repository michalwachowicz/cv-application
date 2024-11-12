import React from "react";

export default function DeletePopup({ item, onCancel, onDelete }) {
  return (
    <div className="popup-backdrop">
      <div
        className="card card-popup popup-popup"
        role="dialog"
        aria-modal="true"
        aria-label="Confirm delete"
      >
        <h2 className="popup-title">Are you sure you want to delete this?</h2>
        <hr />
        <div className="popup-btns">
          <button
            type="button"
            className="btn btn-action btn-action-neutral"
            onClick={onCancel}
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
