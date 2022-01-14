import styled from 'styled-components';

const MainContentContainer = styled.div`
  padding: 2rem;
  border-radius: ${({ fullRound = false }) =>
    fullRound ? '1rem' : '0 0 1rem 1rem'};
  background-color: ${({ theme }) => theme.card};

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export default MainContentContainer;
