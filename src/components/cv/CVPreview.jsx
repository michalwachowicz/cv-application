import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MainContentContainer from '../containers/MainContentContainer';
import closeSvg from '../../assets/close.svg';

function CVPreview(props) {
  const { onClose } = props;
  return (
    <MainContentContainer fullRound>
      <Header>
        <Title>Preview CV</Title>
        <CloseButton onClick={onClose}>
          <CloseIcon src={closeSvg} alt="Close Icon" />
        </CloseButton>
      </Header>
    </MainContentContainer>
  );
}

CVPreview.propTypes = {
  onClose: PropTypes.func.isRequired,
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 900;
`;

const CloseButton = styled.button`
  width: 2rem;
  height: 2rem;
  border: none;
  background: none;
  cursor: pointer;
`;

const CloseIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export default CVPreview;
