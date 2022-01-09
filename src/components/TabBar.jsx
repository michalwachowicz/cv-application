import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TabBarItem, { dataObjectShape } from './TabBarItem';

function TabBar({ items, onCurrentChange }) {
  return (
    <TabBarContainer>
      {items.map((item, index) => (
        <TabBarItem
          data={item}
          index={index}
          key={item.id}
          onCurrentChange={onCurrentChange}
        />
      ))}
    </TabBarContainer>
  );
}

const itemsArray = PropTypes.arrayOf(dataObjectShape);
TabBar.propTypes = {
  items: itemsArray.isRequired,
  onCurrentChange: PropTypes.func.isRequired,
};

const TabBarContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

export default TabBar;
export { itemsArray };
