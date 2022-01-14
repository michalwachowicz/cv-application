import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormSection from '../elements/form/FormSection';
import { Wrapper } from '../wrappers/Wrapper';
import InputContainer from '../containers/InputContainer';
import Input from '../elements/inputs/Input';
import Select from '../elements/inputs/Select';
import { MONTHS, YEARS } from '../../util/dateUtil';
import TextArea from '../elements/inputs/TextArea';
import FormHandler from '../../data/FormHandler';

function Trainings({ userData, onSubmit }) {
  const [id, setId] = useState(null);
  const formHandler = new FormHandler(id, userData, 'trainings', (value) => {
    onSubmit({ id: 'trainings', value });
    setId(null);
  });

  return (
    <FormSection
      title="Trainings, courses, certificates"
      buttonTitle="Add training / course / certificate"
      items={formHandler.list}
      onSubmit={formHandler.submit}
      onDelete={formHandler.delete}
      id={id}
      onUpdateId={(newId) => setId(newId)}
      itemTitle="[str:name]"
      itemSubtitle="[date:month,year]">
      <Wrapper size="2rem">
        <InputContainer>
          <Input
            id="training-name"
            objectKey="name"
            label="Name"
            value={formHandler.item.name}
            onFocusLeft={formHandler.updateData}
            type="text"
            placeholder="e.g.: Data Structures and Algorithms in JavaScript"
          />
          <Input
            id="training-provider"
            objectKey="provider"
            label="Provider"
            value={formHandler.item.provider}
            onFocusLeft={formHandler.updateData}
            type="text"
            placeholder="e.g.: FreeCodeCamp"
          />
        </InputContainer>
        <InputContainer>
          <Select
            id="training-month"
            objectKey="month"
            label="Date"
            value={formHandler.item.month}
            onSelect={formHandler.updateData}
            options={MONTHS}
            title="Month"
          />
          <Select
            id="training-year"
            objectKey="year"
            value={formHandler.item.year}
            onSelect={formHandler.updateData}
            options={YEARS}
            title="Year"
          />
        </InputContainer>
        <TextArea
          id="training-description"
          objectKey="description"
          label="Description"
          onFocusLeft={formHandler.updateData}
          value={formHandler.item.description}
        />
      </Wrapper>
    </FormSection>
  );
}

Trainings.propTypes = {
  userData: PropTypes.objectOf(PropTypes.object).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Trainings;
