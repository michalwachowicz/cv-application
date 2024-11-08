import React from "react";

export default function Select({
  id,
  value,
  label,
  options,
  onChange,
  required = false,
}) {
  return (
    <label className="input input-select" htmlFor={id}>
      {label} {required && <span aria-label="required">*</span>}
      <select
        name={id}
        id={id}
        required={required}
        value={value || options[0]}
        onChange={(e) => onChange(id, e.target.value)}
      >
        {options.map(({ value: optionValue, label: optionLabel }) => (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
    </label>
  );
}
