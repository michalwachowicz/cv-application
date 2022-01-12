import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Personal from '../pages/Personal';
import Experience from '../pages/Experience';
import DownloadCV from '../pages/DownloadCV';
import CVButton from '../elements/buttons/CVButton';

function MainContent(props) {
  const {
    index,
    onDisplayCV,
    onRetrieveData,
    onUploadImage,
    onChangePage,
    userPhoto,
  } = props;
  const pages = [
    {
      title: 'Personal Information',
      page: (
        <Personal
          onRetrieveData={onRetrieveData}
          onClickNext={() => onChangePage(1)}
          onUploadImage={onUploadImage}
          userPhoto={userPhoto}
        />
      ),
    },
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
  onRetrieveData: PropTypes.func.isRequired,
  onUploadImage: PropTypes.func.isRequired,
  onChangePage: PropTypes.func.isRequired,
  userPhoto: PropTypes.string,
};

MainContent.defaultProps = {
  userPhoto: null,
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
