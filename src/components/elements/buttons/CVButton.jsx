import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cvSvg from '../../../assets/cv.svg';

function CVButton(props) {
  const { onCvButtonClick } = props;
  return (
    <Button onClick={onCvButtonClick} type="button">
      <Image src={cvSvg} alt="CV Document Icon" />
    </Button>
  );
}

CVButton.propTypes = {
  onCvButtonClick: PropTypes.func.isRequired,
};

const Button = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.main};
  cursor: pointer;
`;

const Image = styled.img`
  width: 1rem;
  height: 1rem;
`;

export default CVButton;
