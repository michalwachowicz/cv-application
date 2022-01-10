import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;

  & > * {
    flex: 1;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export default InputContainer;
