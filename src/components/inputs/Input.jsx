import React from "react";

export default function Input({ id, type, label, required = false }) {
  return (
    <label htmlFor={id} className="input">
      {label} {required && <span aria-label="required">*</span>}
      <input type={type} required={required} />
    </label>
  );
}
