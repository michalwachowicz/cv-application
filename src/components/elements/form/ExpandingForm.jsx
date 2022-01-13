import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  DeleteButton,
  PrimaryButton,
  SuccessButton,
} from '../buttons/UIButton';
import ButtonContainer from '../../containers/ButtonContainer';
import { WrapperStyles } from '../../wrappers/Wrapper';

function ExpandingForm(props) {
  const { buttonTitle, open, onSetOpen, onSubmit, onDelete, children } = props;

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      {open || (
        <PrimaryButton onClick={() => onSetOpen(true)} fullWidth>
          {buttonTitle}
        </PrimaryButton>
      )}
      {open && (
        <Form size="2rem" onSubmit={submitHandler}>
          {children}
          <ButtonContainer>
            <DeleteButton type="button" onClick={onDelete}>
              Delete
            </DeleteButton>
            <SuccessButton type="submit">Add</SuccessButton>
          </ButtonContainer>
        </Form>
      )}
    </>
  );
}

ExpandingForm.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onSetOpen: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const Form = styled.form`
  ${WrapperStyles};
`;

export default ExpandingForm;
