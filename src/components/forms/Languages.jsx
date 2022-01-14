import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormSection from '../elements/form/FormSection';
import { Wrapper } from '../wrappers/Wrapper';
import InputContainer from '../containers/InputContainer';
import Input from '../elements/inputs/Input';
import Select from '../elements/inputs/Select';
import FormHandler from '../../data/FormHandler';

function Languages({ userData, onSubmit }) {
  const [id, setId] = useState(null);
  const formHandler = new FormHandler(id, userData, 'languages', (value) => {
    onSubmit({ id: 'languages', value });
    setId(null);
  });

  return (
    <FormSection
      title="Languages"
      buttonTitle="Add language"
      items={formHandler.list}
      onSubmit={formHandler.submit}
      onDelete={formHandler.delete}
      id={id}
      onUpdateId={(newId) => setId(newId)}
      itemTitle="[str:language]"
      itemSubtitle="[str:level]">
      <Wrapper size="2rem">
        <InputContainer>
          <Input
            id="language-language"
            objectKey="language"
            label="Language"
            value={formHandler.item.language}
            onFocusLeft={formHandler.updateData}
            type="text"
            placeholder="e.g.: English"
          />
          <Select
            id="language-level"
            objectKey="level"
            label="Level"
            value={formHandler.item.level || 'Do not show'}
            title="Do not show"
            options={[
              'Do not show',
              'Native',
              'Proficient',
              'Advanced',
              'Intermediate',
              'Beginner',
            ]}
            onSelect={formHandler.updateData}
          />
        </InputContainer>
      </Wrapper>
    </FormSection>
  );
}

Languages.propTypes = {
  userData: PropTypes.objectOf(PropTypes.object).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Languages;
