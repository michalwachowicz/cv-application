import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormSection from '../elements/form/FormSection';
import { Wrapper } from '../wrappers/Wrapper';
import InputContainer from '../containers/InputContainer';
import Input from '../elements/inputs/Input';
import Select from '../elements/inputs/Select';
import { MONTHS, YEARS } from '../../util/dateUtil';
import FormHandler from '../../data/FormHandler';

function Education({ userData, onSubmit }) {
  const [id, setId] = useState(null);
  const formHandler = new FormHandler(id, userData, 'education', (value) => {
    onSubmit({ id: 'education', value });
    setId(null);
  });

  return (
    <FormSection
      title="Education"
      buttonTitle="Add education"
      items={formHandler.list}
      onSubmit={formHandler.submit}
      onDelete={formHandler.delete}
      id={id}
      onUpdateId={(newId) => setId(newId)}
      itemTitle="[str:studies]"
      itemSubtitle="[date:startMonth,startYear] - [date:endMonth,endYear]">
      <Wrapper size="2rem">
        <InputContainer>
          <Input
            id="education-studies"
            objectKey="studies"
            label="Studies"
            value={formHandler.item.studies}
            onFocusLeft={formHandler.updateData}
            type="text"
            placeholder="e.g.: Bachelor of Science"
          />
          <Input
            id="education-city"
            objectKey="city"
            label="City / Town"
            value={formHandler.item.city}
            onFocusLeft={formHandler.updateData}
            type="text"
            placeholder="e.g.: London"
          />
        </InputContainer>
        <Input
          id="education-institution"
          objectKey="institution"
          label="Institution"
          value={formHandler.item.institution}
          onFocusLeft={formHandler.updateData}
          type="text"
          placeholder="e.g.: Massachusetts Institute of Technology"
        />
        <InputContainer>
          <Select
            id="education-start-month"
            objectKey="startMonth"
            label="Start date"
            value={formHandler.item.startMonth}
            onSelect={formHandler.updateData}
            options={MONTHS}
            title="Month"
          />
          <Select
            id="education-start-year"
            objectKey="startYear"
            value={formHandler.item.startYear}
            onSelect={formHandler.updateData}
            options={YEARS}
            title="Year"
          />
          <Select
            id="education-end-month"
            objectKey="endMonth"
            label="End date"
            value={formHandler.item.endMonth}
            onSelect={formHandler.updateData}
            options={MONTHS}
            title="Month"
          />
          <Select
            id="education-end-year"
            objectKey="endYear"
            value={formHandler.item.endYear}
            onSelect={formHandler.updateData}
            options={YEARS}
            title="Year"
          />
        </InputContainer>
      </Wrapper>
    </FormSection>
  );
}

Education.propTypes = {
  userData: PropTypes.objectOf(PropTypes.object).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Education;
