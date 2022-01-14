import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uniqid from 'uniqid';
import Divider from '../Divider';
import ExpandingForm from './ExpandingForm';
import { WrapperStyles } from '../../wrappers/Wrapper';
import FormListItem from './FormListItem';
import formatTitle from '../../../util/formItemUtil';

function FormSection(props) {
  const {
    id,
    title,
    buttonTitle,
    items,
    itemTitle,
    itemSubtitle,
    onSubmit,
    onDelete,
    onUpdateId,
    children,
  } = props;
  const [open, setOpen] = useState(false);

  const updateIdHandler = (itemId) => {
    onUpdateId(itemId);
    setOpen(true);
  };

  const submitHandler = () => {
    onSubmit(id || uniqid());
    setOpen(false);
  };

  const deleteHandler = (targetId) => {
    onDelete(targetId || id);
    setOpen(false);
  };

  return (
    <FormSectionContainer size="1.5rem">
      <Title>{title}</Title>
      <Divider />
      {items.length > 0 && (
        <>
          <ItemsList size="1rem">
            {items.map((item) => (
              <FormListItem
                key={item.id}
                title={formatTitle(item, itemTitle)}
                subtitle={itemSubtitle ? formatTitle(item, itemSubtitle) : null}
                onEdit={() => updateIdHandler(item.id)}
                onDelete={() => deleteHandler(item.id)}
              />
            ))}
          </ItemsList>
          <Divider />
        </>
      )}
      <ExpandingForm
        id={id}
        buttonTitle={buttonTitle}
        open={open}
        onSetOpen={setOpen}
        onSubmit={submitHandler}
        onDelete={() => deleteHandler(null)}>
        {children}
      </ExpandingForm>
    </FormSectionContainer>
  );
}

FormSection.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemTitle: PropTypes.string.isRequired,
  itemSubtitle: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdateId: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

FormSection.defaultProps = {
  id: null,
  itemSubtitle: null,
};

const FormSectionContainer = styled.section`
  ${WrapperStyles};
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
`;

const ItemsList = styled.ul`
  list-style: none;
  ${WrapperStyles};
`;

export default FormSection;
