import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormSection from '../elements/form/FormSection';
import Input from '../elements/inputs/Input';
import FormHandler from '../../data/FormHandler';

function Hobbies({ userData, onSubmit }) {
  const [id, setId] = useState(null);
  const formHandler = new FormHandler(id, userData, 'hobbies', (value) => {
    onSubmit({ id: 'hobbies', value });
    setId(null);
  });

  return (
    <FormSection
      title="Hobbies"
      buttonTitle="Add hobby"
      items={formHandler.list}
      onSubmit={formHandler.submit}
      onDelete={formHandler.delete}
      id={id}
      onUpdateId={(newId) => setId(newId)}
      itemTitle="[str:hobby]">
      <Input
        id="hobby-hobby"
        objectKey="hobby"
        label="Hobby"
        value={formHandler.item.hobby}
        onFocusLeft={formHandler.updateData}
        type="text"
        placeholder="e.g.: Cooking"
      />
    </FormSection>
  );
}

Hobbies.propTypes = {
  userData: PropTypes.objectOf(PropTypes.object).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Hobbies;
