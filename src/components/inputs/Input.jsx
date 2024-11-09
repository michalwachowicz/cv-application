import React from "react";

export default function Input({
  id,
  type,
  label,
  value,
  placeholder,
  onChange,
  required = false,
}) {
  return (
    <label htmlFor={id} className="input">
      {label} {required && <span aria-label="required">*</span>}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(id, e.target.value)}
        required={required}
      />
    </label>
  );
}
