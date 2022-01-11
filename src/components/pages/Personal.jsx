import React from 'react';
import PropTypes from 'prop-types';
import Input from '../elements/Input';
import InputContainer from '../containers/InputContainer';
import InputsWrapper from '../wrappers/InputsWrapper';
import Select from '../elements/Select';
import { SuccessButton } from '../elements/UIButton';
import ButtonContainer from '../containers/ButtonContainer';

function Personal(props) {
  const { onRetrieveData, onClickNext } = props;
  return (
    <div>
      <InputsWrapper>
        <InputContainer>
          <Input
            type="text"
            id="first-name"
            label="First Name"
            onFocusLeft={onRetrieveData}
            required
          />
          <Input
            type="text"
            id="last-name"
            label="Last Name"
            onFocusLeft={onRetrieveData}
            required
          />
        </InputContainer>
        <InputContainer>
          <Input
            type="email"
            id="email"
            label="Email Address"
            onFocusLeft={onRetrieveData}
            required
          />
          <Input
            type="tel"
            id="telephone"
            label="Telephone Number"
            onFocusLeft={onRetrieveData}
          />
        </InputContainer>
        <InputContainer>
          <Input
            type="date"
            id="birthdate"
            label="Date of Birth"
            onFocusLeft={onRetrieveData}
            required
          />
          <Select
            id="gender"
            label="Gender"
            options={['Male', 'Female', 'Non-binary']}
            title="Select Gender"
            onSelect={onRetrieveData}
            required
          />
        </InputContainer>
        <InputContainer>
          <Input
            type="text"
            id="country"
            label="Country"
            onFocusLeft={onRetrieveData}
          />
          <Input
            type="text"
            id="city"
            label="City / Town"
            onFocusLeft={onRetrieveData}
          />
        </InputContainer>
        <InputContainer>
          <Input
            type="text"
            id="linkedin"
            label="LinkedIn"
            onFocusLeft={onRetrieveData}
          />
          <Input
            type="url"
            id="website"
            label="Website"
            onFocusLeft={onRetrieveData}
          />
        </InputContainer>
      </InputsWrapper>
      <ButtonContainer>
        <SuccessButton onClick={onClickNext}>Next</SuccessButton>
      </ButtonContainer>
    </div>
  );
}

Personal.propTypes = {
  onRetrieveData: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
};

export default Personal;
