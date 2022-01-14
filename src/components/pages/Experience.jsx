import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from '../wrappers/Wrapper';
import WorkExperience from '../forms/WorkExperience';
import Education from '../forms/Education';
import Trainings from '../forms/Trainings';
import Skills from '../forms/Skills';
import Languages from '../forms/Languages';
import Hobbies from '../forms/Hobbies';
import TextArea from '../elements/inputs/TextArea';
import ButtonContainer from '../containers/ButtonContainer';
import { SecondaryButton, SuccessButton } from '../elements/buttons/UIButton';

function Experience(props) {
  const { userData, onRetrieveData, onChangePage } = props;
  return (
    <Wrapper size="3rem">
      <WorkExperience userData={userData} onSubmit={onRetrieveData} />
      <Education userData={userData} onSubmit={onRetrieveData} />
      <Trainings userData={userData} onSubmit={onRetrieveData} />
      <Skills userData={userData} onSubmit={onRetrieveData} />
      <Languages userData={userData} onSubmit={onRetrieveData} />
      <Hobbies userData={userData} onSubmit={onRetrieveData} />
      <TextArea
        id="description"
        label="Description"
        value={userData.description}
        onFocusLeft={onRetrieveData}
      />
      <ButtonContainer>
        <SecondaryButton onClick={() => onChangePage(0)}>Back</SecondaryButton>
        <SuccessButton onClick={() => onChangePage(2)}>Next</SuccessButton>
      </ButtonContainer>
    </Wrapper>
  );
}

Experience.propTypes = {
  userData: PropTypes.objectOf(PropTypes.object).isRequired,
  onRetrieveData: PropTypes.func.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

export default Experience;
