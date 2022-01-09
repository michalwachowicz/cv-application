import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TabBar, { itemsArray } from './TabBar';

function MainCard(props) {
  const { tabBarItems, onCurrentChange } = props;
  return (
    <Main>
      <TabBar items={tabBarItems} onCurrentChange={onCurrentChange} />
    </Main>
  );
}

MainCard.propTypes = {
  tabBarItems: itemsArray.isRequired,
  onCurrentChange: PropTypes.func.isRequired,
};

const Main = styled.main`
  width: 100%;
  margin-top: 5rem;
`;

export default MainCard;
