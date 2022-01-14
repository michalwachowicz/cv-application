import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${({ justify = 'flex-end' }) => justify};
  flex-direction: ${({ direction = 'row' }) => direction};
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

export default ButtonContainer;
