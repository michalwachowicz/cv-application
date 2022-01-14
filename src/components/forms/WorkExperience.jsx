import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormSection from '../elements/form/FormSection';
import { Wrapper } from '../wrappers/Wrapper';
import InputContainer from '../containers/InputContainer';
import Input from '../elements/inputs/Input';
import TextArea from '../elements/inputs/TextArea';
import Select from '../elements/inputs/Select';
import { MONTHS, YEARS } from '../../util/dateUtil';
import FormHandler from '../../data/FormHandler';

function WorkExperience({ userData, onSubmit }) {
  const [id, setId] = useState(null);
  const formHandler = new FormHandler(id, userData, 'work', (value) => {
    onSubmit({ id: 'work', value });
    setId(null);
  });

  return (
    <FormSection
      title="Work Experience"
      buttonTitle="Add work experience"
      items={formHandler.list}
      onSubmit={formHandler.submit}
      onDelete={formHandler.delete}
      id={id}
      onUpdateId={(newId) => setId(newId)}
      itemTitle="[str:position]"
      itemSubtitle="[date:startMonth,startYear] - [date:endMonth,endYear]">
      <Wrapper size="2rem">
        <InputContainer>
          <Input
            id="work-position"
            objectKey="position"
            label="Title / Position"
            value={formHandler.item.position}
            onFocusLeft={formHandler.updateData}
            type="text"
            placeholder="e.g.: Front-End Developer"
          />
          <Input
            id="work-city"
            objectKey="city"
            label="City / Town"
            value={formHandler.item.city}
            onFocusLeft={formHandler.updateData}
            type="text"
            placeholder="e.g.: London"
          />
        </InputContainer>
        <Input
          id="work-company"
          objectKey="company"
          label="Company"
          value={formHandler.item.company}
          onFocusLeft={formHandler.updateData}
          type="text"
          placeholder="e.g.: Google"
        />
        <InputContainer>
          <Select
            id="work-start-month"
            objectKey="startMonth"
            label="Start date"
            value={formHandler.item.startMonth}
            onSelect={formHandler.updateData}
            options={MONTHS}
            title="Month"
          />
          <Select
            id="work-start-year"
            objectKey="startYear"
            value={formHandler.item.startYear}
            onSelect={formHandler.updateData}
            options={YEARS}
            title="Year"
          />
          <Select
            id="work-end-month"
            objectKey="endMonth"
            label="End date"
            value={formHandler.item.endMonth}
            onSelect={formHandler.updateData}
            options={MONTHS}
            title="Month"
          />
          <Select
            id="work-end-year"
            objectKey="endYear"
            value={formHandler.item.endYear}
            onSelect={formHandler.updateData}
            options={YEARS}
            title="Year"
          />
        </InputContainer>
        <TextArea
          id="work-description"
          objectKey="description"
          label="Description"
          value={formHandler.item.description}
          onFocusLeft={formHandler.updateData}
        />
      </Wrapper>
    </FormSection>
  );
}

WorkExperience.propTypes = {
  userData: PropTypes.objectOf(PropTypes.object).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default WorkExperience;
