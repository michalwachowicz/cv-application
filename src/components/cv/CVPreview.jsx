import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MainContentContainer from '../containers/MainContentContainer';
import closeSvg from '../../assets/close.svg';
import CVCanvas from './canvas/CVCanvas';

function CVPreview(props) {
  const { userData, onClose } = props;

  return (
    <MainContentContainer fullRound>
      <Header>
        <Title>Preview CV</Title>
        <CloseButton onClick={onClose}>
          <CloseIcon src={closeSvg} alt="Close Icon" />
        </CloseButton>
      </Header>
      <CVContainer>
        <CVCanvas userData={userData} />
      </CVContainer>
    </MainContentContainer>
  );
}

CVPreview.propTypes = {
  userData: PropTypes.objectOf(PropTypes.object).isRequired,
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

const canvasSize = 'max-width: 384px !important; max-height: 542px !important;';
const CVContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  overflow: auto;
  width: 100%;
  height: 320px;

  & > div > .konvajs-content {
    ${canvasSize};

    @media (max-width: 450px) {
      position: absolute !important;
      top: 0;
      left: 0;
    }

    & > canvas {
      ${canvasSize};
    }
  }
`;

export default CVPreview;
