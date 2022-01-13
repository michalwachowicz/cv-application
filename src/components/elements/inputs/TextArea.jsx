import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Field, Label } from './InputStyles';

function TextArea(props) {
  const { id, objectKey, value, label, placeholder, onFocusLeft } = props;
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <TextAreaField
        id={objectKey || id}
        defaultValue={value || ''}
        placeholder={placeholder}
        onBlur={(e) =>
          onFocusLeft({ id: objectKey || id, value: e.target.value })
        }
      />
    </div>
  );
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  objectKey: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onFocusLeft: PropTypes.func.isRequired,
};

TextArea.defaultProps = {
  objectKey: null,
  value: null,
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
