import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import errorSvg from '../../assets/error.svg';

function ErrorAlert({ message }) {
  return message ? (
    <ErrorContainer>
      <ErrorPopup>
        <ErrorIcon src={errorSvg} alt="Error Icon" />
        <ErrorMessage>{message}</ErrorMessage>
      </ErrorPopup>
    </ErrorContainer>
  ) : null;
}

ErrorAlert.propTypes = {
  message: PropTypes.string,
};

ErrorAlert.defaultProps = {
  message: null,
};

const popupAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  
  25% {
    transform: scale(1);
    opacity: 1;
  }
  
  75% {
    transform: scale(1) ;
    opacity: 1;
  }
  
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

const ErrorContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  inset: 0 0 5vh;
  padding: 0 1rem;
`;

const ErrorPopup = styled.div`
  display: flex;
  align-items: center;
  max-width: 768px;
  width: 100%;
  padding: 0.5rem;
  border-radius: 1rem;
  background-color: #fa5252;
  animation: ${popupAnimation} 2s ease;
`;

const ErrorIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`;

const ErrorMessage = styled.p`
  color: #fff;
  font-size: 1rem;
`;

export default ErrorAlert;
