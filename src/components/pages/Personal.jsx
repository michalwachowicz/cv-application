import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../elements/Input';
import InputContainer from '../containers/InputContainer';
import InputsWrapper from '../wrappers/InputsWrapper';
import Select from '../elements/Select';
import { SuccessButton } from '../elements/UIButton';
import ButtonContainer from '../containers/ButtonContainer';
import ImageInput from '../elements/ImageInput';

function Personal(props) {
  const { onRetrieveData, onUploadImage, onClickNext, userPhoto } = props;
  return (
    <ContentWrapper>
      <ImageInput image={userPhoto} onUploadImage={onUploadImage} />
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
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

Personal.propTypes = {
  onRetrieveData: PropTypes.func.isRequired,
  onUploadImage: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
  userPhoto: PropTypes.string,
};

Personal.defaultProps = {
  userPhoto: null,
};

export default Personal;
