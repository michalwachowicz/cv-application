import React from "react";
import { getYearsArray, getMonthsArray } from "../../utils/dateUtils";

export default function DateSelect({
  id,
  label,
  value,
  onChange,
  required = false,
}) {
  const monthId = `${id}Month`;
  const yearId = `${id}Year`;

  const changeHandler = (selectId, selectValue) => {
    if (selectId === monthId) onChange(id, { ...value, month: selectValue });
    else onChange(id, { ...value, year: selectValue });
  };

  return (
    <div className="input input-select-date-container">
      <div className="input-select-date-label">
        {label} {required && <span aria-label="required">*</span>}
      </div>

      <div className="input-select-date-wrapper">
        <label
          className="input input-select input-select-date"
          htmlFor={monthId}
          aria-label={`${label} month`}
        >
          <select
            name={monthId}
            id={monthId}
            value={value.month || getMonthsArray()[0]}
            onChange={(e) => changeHandler(monthId, e.target.value)}
            required={required}
          >
            {getMonthsArray().map((month, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>
        </label>

        <label
          className="input input-select input-select-date"
          htmlFor={yearId}
          aria-label={`${label} year`}
        >
          <select
            name={yearId}
            id={yearId}
            value={value.year || getYearsArray()[0]}
            onChange={(e) => changeHandler(yearId, e.target.value)}
            required={required}
          >
            {getYearsArray().map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
