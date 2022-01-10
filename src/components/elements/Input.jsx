import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field, Label, LabelRequired } from './InputStyles';

function Input(props) {
  const { label, type, id, required, onFocusLeft } = props;
  return (
    <div>
      {required || <Label htmlFor={id}>{label}</Label>}
      {!required || <LabelRequired htmlFor={id}>{label}</LabelRequired>}
      <InputField
        type={type}
        id={id}
        name={id}
        required={required}
        onBlur={(e) => onFocusLeft({ id, value: e.target.value })}
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onFocusLeft: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

Input.defaultProps = {
  required: false,
};

const InputField = styled.input`
  ${Field}
  &::-webkit-date-and-time-value {
    text-align: left;
  }
`;

export default Input;
