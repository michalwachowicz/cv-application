import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../elements/inputs/Input';
import InputContainer from '../containers/InputContainer';
import Select from '../elements/inputs/Select';
import { SuccessButton } from '../elements/buttons/UIButton';
import ButtonContainer from '../containers/ButtonContainer';
import ImageInput from '../elements/inputs/ImageInput';
import { Wrapper } from '../wrappers/Wrapper';

function Personal(props) {
  const { userData, onRetrieveData, onUploadImage, onClickNext } = props;
  const { photo } = userData;
  return (
    <ContentWrapper>
      <ImageInput image={photo} onUploadImage={onUploadImage} />
      <div>
        <Wrapper size="2rem">
          <InputContainer>
            <Input
              type="text"
              id="first-name"
              objectKey="firstName"
              label="First Name"
              value={userData.firstName}
              onFocusLeft={onRetrieveData}
              required
            />
            <Input
              type="text"
              id="last-name"
              objectKey="lastName"
              label="Last Name"
              value={userData.lastName}
              onFocusLeft={onRetrieveData}
              required
            />
          </InputContainer>
          <InputContainer>
            <Input
              type="email"
              id="email"
              label="Email Address"
              value={userData.email}
              onFocusLeft={onRetrieveData}
              required
            />
            <Input
              type="tel"
              id="telephone"
              label="Telephone Number"
              value={userData.telephone}
              onFocusLeft={onRetrieveData}
            />
          </InputContainer>
          <InputContainer>
            <Input
              type="date"
              id="birthdate"
              label="Date of Birth"
              value={userData.birthdate}
              onFocusLeft={onRetrieveData}
              required
            />
            <Select
              id="gender"
              label="Gender"
              options={['Male', 'Female', 'Non-binary']}
              title="Select Gender"
              value={userData.gender}
              onSelect={onRetrieveData}
              required
            />
          </InputContainer>
          <InputContainer>
            <Input
              type="text"
              id="country"
              label="Country"
              value={userData.country}
              onFocusLeft={onRetrieveData}
            />
            <Input
              type="text"
              id="city"
              label="City / Town"
              value={userData.city}
              onFocusLeft={onRetrieveData}
            />
          </InputContainer>
          <InputContainer>
            <Input
              type="text"
              id="linkedin"
              label="LinkedIn"
              value={userData.linkedin}
              onFocusLeft={onRetrieveData}
            />
            <Input
              type="url"
              id="website"
              label="Website"
              value={userData.website}
              onFocusLeft={onRetrieveData}
            />
          </InputContainer>
        </Wrapper>
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
  userData: PropTypes.objectOf(PropTypes.object).isRequired,
  onRetrieveData: PropTypes.func.isRequired,
  onUploadImage: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
};

export default Personal;
