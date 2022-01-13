import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field, Label, LabelRequired } from './InputStyles';

function Input(props) {
  const {
    label,
    type,
    value,
    id,
    objectKey,
    placeholder,
    required,
    onFocusLeft,
  } = props;
  return (
    <div>
      {required || <Label htmlFor={id}>{label}</Label>}
      {!required || <LabelRequired htmlFor={id}>{label}</LabelRequired>}
      <InputField
        type={type}
        id={id}
        name={id}
        defaultValue={value || ''}
        placeholder={placeholder}
        required={required}
        onBlur={(e) =>
          onFocusLeft({ id: objectKey || id, value: e.target.value })
        }
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  id: PropTypes.string.isRequired,
  objectKey: PropTypes.string,
  placeholder: PropTypes.string,
  onFocusLeft: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

Input.defaultProps = {
  objectKey: null,
  value: null,
  placeholder: null,
  required: false,
};

const InputField = styled.input`
  ${Field}

  &::-webkit-date-and-time-value {
    text-align: left;
  }

  &::placeholder {
    color: ${({ theme }) => theme.textContent};
  }
`;

export default Input;
