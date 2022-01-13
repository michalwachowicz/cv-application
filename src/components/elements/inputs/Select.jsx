import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uniqid from 'uniqid';
import { Field, Label, LabelRequired } from './InputStyles';
import dropdownSvg from '../../../assets/dropdown.svg';
import { WrapperStyles } from '../../wrappers/Wrapper';

function Select(props) {
  const { label, id, objectKey, title, value, options, onSelect, required } =
    props;
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);

  const toggle = () => setOpen((prevState) => !prevState);
  const selectOption = (option) => {
    setSelectedOption(option);
    setOpen(false);
    onSelect({ id: objectKey || id, value: option });
  };

  return (
    <div>
      {label && (
        <>
          {required || <Label htmlFor={id}>{label}</Label>}
          {!required || <LabelRequired htmlFor={id}>{label}</LabelRequired>}
        </>
      )}
      <DropdownContainer>
        <DropdownHeader onClick={toggle}>
          <div>{selectedOption || title}</div>
          <DropdownIcon src={dropdownSvg} alt="Dropdown Triangle Icon" />
        </DropdownHeader>
        {open && (
          <DropdownOptionsContainer>
            <DropdownOptions size="0.5rem">
              {options.map((option) =>
                option === selectedOption ? (
                  <DropdownOptionSelected
                    onClick={() => selectOption(option)}
                    key={uniqid()}>
                    {option}
                  </DropdownOptionSelected>
                ) : (
                  <DropdownOption
                    onClick={() => selectOption(option)}
                    key={uniqid()}>
                    {option}
                  </DropdownOption>
                ),
              )}
            </DropdownOptions>
          </DropdownOptionsContainer>
        )}
      </DropdownContainer>
    </div>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  objectKey: PropTypes.string,
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  onSelect: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

Select.defaultProps = {
  label: null,
  objectKey: null,
  value: null,
  required: false,
};

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const DropdownHeader = styled.div`
  ${Field}

  & {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
`;

const DropdownIcon = styled.img`
  width: 0.75rem;
  height: 0.75rem;
`;

const DropdownOptionsContainer = styled.div`
  position: absolute;
  z-index: 999;
  width: 100%;
`;

const DropdownOptions = styled.ul`
  max-height: 10rem;
  overflow-y: scroll;
  padding: 0.5rem;
  border-radius: 1rem;
  list-style: none;
  background-color: ${({ theme }) => theme.card};
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.25);
  font-weight: 700;
  ${WrapperStyles};
`;

const DropdownOption = styled.li`
  padding: 1rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.textContent};
  cursor: pointer;

  &:active,
  &:hover {
    background-color: ${({ theme }) => theme.input};
  }
`;

const DropdownOptionSelected = styled(DropdownOption)`
  background-color: ${({ theme }) => theme.input};
`;

export default Select;
