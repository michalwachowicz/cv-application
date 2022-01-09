import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Personal from '../pages/Personal';
import Experience from '../pages/Experience';
import DownloadCV from '../pages/DownloadCV';

function MainContent({ index }) {
  const pages = [
    { title: 'Personal Information', page: <Personal /> },
    { title: 'Experience', page: <Experience /> },
    { title: 'DownloadCV', page: <DownloadCV /> },
  ];
  return (
    <MainContentContainer>
      <Title>{pages[index].title}</Title>
      {pages[index].page}
    </MainContentContainer>
  );
}

MainContent.propTypes = {
  index: PropTypes.number.isRequired,
};

const MainContentContainer = styled.div`
  padding: 2rem;
  border-radius: 0 0 1rem 1rem;
  background-color: ${({ theme }) => theme.card};

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 900;
`;

export default MainContent;
