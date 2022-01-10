import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const Label = styled.label`
  color: ${({ theme }) => theme.textContent};
  font-size: 1rem;
`;

const LabelRequired = styled(Label)`
  &::after {
    content: '*';
    margin-left: 0.25rem;
    color: #fa5252;
  }
`;

const InputField = styled.input`
  min-height: 3rem;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem;
  border: none;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.textColor};
  font-size: 1rem;
  transition: background-color 0.5s ease;
  -webkit-appearance: none;

  &::-webkit-date-and-time-value {
    text-align: left;
  }

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.inputActive};
  }
`;

export default Input;
