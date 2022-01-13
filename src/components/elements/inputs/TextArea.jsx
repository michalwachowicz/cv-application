import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Field, Label } from './InputStyles';

function TextArea(props) {
  const { id, label, placeholder, onFocusLeft } = props;
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <TextAreaField id={id} placeholder={placeholder} onBlur={onFocusLeft} />
    </div>
  );
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onFocusLeft: PropTypes.func.isRequired,
};

TextArea.defaultProps = {
  placeholder: null,
};

const TextAreaField = styled.textarea`
  ${Field};
  height: 6rem;
  font-family: 'Roboto', sans-serif;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.textContent};
  }
`;

export default TextArea;
