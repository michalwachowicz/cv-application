import React from "react";

export default function Checkbox({ id, label, checked, onSwitch, required }) {
  return (
    <label htmlFor={id} className="input input-checkbox">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onSwitch}
        required={required}
      />
      {label}
    </label>
  );
}
