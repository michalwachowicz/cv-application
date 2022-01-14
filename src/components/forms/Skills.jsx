import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormSection from '../elements/form/FormSection';
import { Wrapper } from '../wrappers/Wrapper';
import InputContainer from '../containers/InputContainer';
import Input from '../elements/inputs/Input';
import Select from '../elements/inputs/Select';
import FormHandler from '../../data/FormHandler';

function Skills({ userData, onSubmit }) {
  const [id, setId] = useState(null);
  const formHandler = new FormHandler(id, userData, 'skills', (value) => {
    onSubmit({ id: 'skills', value });
    setId(null);
  });

  return (
    <FormSection
      title="Skills"
      buttonTitle="Add skill"
      items={formHandler.list}
      onSubmit={formHandler.submit}
      onDelete={formHandler.delete}
      id={id}
      onUpdateId={(newId) => setId(newId)}
      itemTitle="[str:skill]"
      itemSubtitle="[str:level]">
      <Wrapper size="2rem">
        <InputContainer>
          <Input
            id="skill-skill"
            objectKey="skill"
            label="Skill"
            value={formHandler.item.skill}
            onFocusLeft={formHandler.updateData}
            type="text"
            placeholder="e.g.: Microsoft Excel"
          />
          <Select
            id="skill-level"
            objectKey="level"
            label="Level"
            value={formHandler.item.level || 'Do not show'}
            title="Do not show"
            options={[
              'Do not show',
              'Expert',
              'Advanced',
              'Intermediate',
              'Basic',
              'Beginner',
            ]}
            onSelect={formHandler.updateData}
          />
        </InputContainer>
      </Wrapper>
    </FormSection>
  );
}

Skills.propTypes = {
  userData: PropTypes.objectOf(PropTypes.object).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Skills;
