import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MainContent from './MainContent';
import TabBar, { itemsArray } from '../tab/TabBar';

function MainCard(props) {
  const { tabBarItems, onCurrentChange, index } = props;
  return (
    <Main>
      <TabBar items={tabBarItems} onCurrentChange={onCurrentChange} />
      <MainContent index={index} />
    </Main>
  );
}

MainCard.propTypes = {
  tabBarItems: itemsArray.isRequired,
  onCurrentChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

const Main = styled.main`
  width: 100%;
  margin-top: 5rem;
`;

export default MainCard;
