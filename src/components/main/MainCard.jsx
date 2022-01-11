import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MainContent from './MainContent';
import TabBar, { itemsArray } from '../tab/TabBar';

function MainCard(props) {
  const {
    tabBarItems,
    onCurrentChange,
    onDisplayCV,
    onRetrieveData,
    onUploadImage,
    userPhoto,
    index,
  } = props;
  return (
    <Main>
      <TabBar items={tabBarItems} onCurrentChange={onCurrentChange} />
      <MainContent
        index={index}
        onDisplayCV={onDisplayCV}
        onRetrieveData={onRetrieveData}
        onChangePage={onCurrentChange}
        onUploadImage={onUploadImage}
        userPhoto={userPhoto}
      />
    </Main>
  );
}

MainCard.propTypes = {
  tabBarItems: itemsArray.isRequired,
  onCurrentChange: PropTypes.func.isRequired,
  onDisplayCV: PropTypes.func.isRequired,
  onRetrieveData: PropTypes.func.isRequired,
  onUploadImage: PropTypes.func.isRequired,
  userPhoto: PropTypes.string,
  index: PropTypes.number.isRequired,
};

MainCard.defaultProps = {
  userPhoto: null,
};

const Main = styled.main`
  width: 100%;
  margin-top: 5rem;
`;

export default MainCard;
