import React, { useRef } from "react";

export default function TextArea({
  id,
  label,
  value,
  onChange,
  required = false,
}) {
  const textarea = useRef();

  const adjustHeight = () => {
    textarea.current.style.height = "inherit";
    textarea.current.style.height = `${textarea.current.scrollHeight}px`;
  };

  const handleChange = (inputId, inputValue) => {
    onChange(inputId, inputValue);
    adjustHeight();
  };

  return (
    <label htmlFor={id} className="input input-textarea">
      {label} {required && <span aria-label="required">*</span>}
      <textarea
        ref={textarea}
        name={id}
        id={id}
        value={value}
        onChange={(e) => handleChange(id, e.target.value)}
        required={required}
      />
    </label>
  );
}
