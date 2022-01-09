import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function TabBarItem({ index, data, onCurrentChange }) {
  const { title, active } = data;
  return (
    <TabBarItemCard active={active} onClick={() => onCurrentChange(index)}>
      <NumberCircle active={active}>{index + 1}</NumberCircle>
      <Title active={active}>{title}</Title>
    </TabBarItemCard>
  );
}

const dataObjectShape = PropTypes.shape({
  title: PropTypes.string,
  active: PropTypes.bool,
  id: PropTypes.string,
});

TabBarItem.propTypes = {
  index: PropTypes.number.isRequired,
  data: dataObjectShape.isRequired,
  onCurrentChange: PropTypes.func.isRequired,
};

const TabBarItemCard = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 1rem 1rem 0 0;
  background-color: ${({ active, theme }) =>
    active ? theme.card : theme.cardInactive};
  cursor: pointer;

  @media (max-width: 700px) {
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
  }
`;

const NumberCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 100px;
  background-color: ${({ active, theme }) =>
    active ? theme.main : theme.cardInactiveCircle};
  color: ${({ active, theme }) => (active ? '#fff' : theme.cardInactiveText)};
  font-size: 1rem;
  font-weight: 700;
`;

const Title = styled.div`
  font-size: 1rem;
  text-align: center;
  color: ${({ active, theme }) =>
    active ? theme.textColor : theme.cardInactiveText};

  @media (max-width: 700px) {
    font-size: 0.75rem;
  }
`;

export default TabBarItem;
export { dataObjectShape };
