import styled from 'styled-components';

const InputsWrapper = styled.div`
  & > * {
    margin-bottom: 2rem;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`;

export default InputsWrapper;
