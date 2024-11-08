import React from "react";

export default function Select({ id, label, options, required = false }) {
  return (
    <label className="input input-select" htmlFor={id}>
      {label} {required && <span aria-label="required">*</span>}
      <select name={id} id={id} required={required}>
        {options.map(({ value, label: optionLabel }) => (
          <option key={value} value={value}>
            {optionLabel}
          </option>
        ))}
      </select>
    </label>
  );
}
