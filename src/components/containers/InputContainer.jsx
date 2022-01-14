import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.5rem;
  width: 100%;

  & > * {
    width: 100%;
    flex: 1;
  }

  @media (max-width: 480px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export default InputContainer;
