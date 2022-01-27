import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MainContent from './MainContent';
import TabBar, { itemsArray } from '../tab/TabBar';

function MainCard(props) {
  const {
    userData,
    tabBarItems,
    onCurrentChange,
    onDisplayCV,
    onRetrieveData,
    onUploadImage,
    index,
  } = props;
  return (
    <Main>
      <TabBar items={tabBarItems} onCurrentChange={onCurrentChange} />
      <MainContent
        index={index}
        userData={userData}
        onDisplayCV={onDisplayCV}
        onRetrieveData={onRetrieveData}
        onChangePage={onCurrentChange}
        onUploadImage={onUploadImage}
      />
    </Main>
  );
}

MainCard.propTypes = {
  userData: PropTypes.objectOf(PropTypes.object).isRequired,
  tabBarItems: itemsArray.isRequired,
  onCurrentChange: PropTypes.func.isRequired,
  onDisplayCV: PropTypes.func.isRequired,
  onRetrieveData: PropTypes.func.isRequired,
  onUploadImage: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

const Main = styled.main`
  width: 100%;
  //margin-top: 5rem;
`;

export default MainCard;
