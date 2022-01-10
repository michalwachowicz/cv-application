import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Personal from '../pages/Personal';
import Experience from '../pages/Experience';
import DownloadCV from '../pages/DownloadCV';
import CVButton from '../elements/CVButton';

function MainContent({ index, onDisplayCV }) {
  const pages = [
    { title: 'Personal Information', page: <Personal /> },
    { title: 'Experience', page: <Experience /> },
    { title: 'DownloadCV', page: <DownloadCV /> },
  ];
  return (
    <MainContentContainer>
      <Header>
        <Title>{pages[index].title}</Title>
        <CVButton onCvButtonClick={onDisplayCV} />
      </Header>
      {pages[index].page}
    </MainContentContainer>
  );
}

MainContent.propTypes = {
  index: PropTypes.number.isRequired,
  onDisplayCV: PropTypes.func.isRequired,
};

const MainContentContainer = styled.div`
  padding: 2rem;
  border-radius: 0 0 1rem 1rem;
  background-color: ${({ theme }) => theme.card};

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

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

export default MainContent;
