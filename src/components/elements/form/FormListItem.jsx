import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DeleteIcon from '../icons/DeleteIcon';
import EditIcon from '../icons/EditIcon';

function FormListItem(props) {
  const { title, subtitle, onEdit, onDelete } = props;
  return (
    <ListItem>
      <div>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </div>
      <Buttons>
        <Button onClick={onEdit}>
          <EditIcon size="100%" />
        </Button>
        <Button onClick={onDelete}>
          <DeleteIcon size="100%" />
        </Button>
      </Buttons>
    </ListItem>
  );
}

FormListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h4`
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.textContent};
  font-size: 1rem;
  font-weight: 700;
`;

const Subtitle = styled.h5`
  color: ${({ theme }) => theme.textContent};
  font-size: 0.75rem;
  font-weight: 300;
`;

const Buttons = styled.div`
  & > :first-child {
    margin-right: 0.5rem;
  }
`;

const Button = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  background: none;
  cursor: pointer;
`;

export default FormListItem;
