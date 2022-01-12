import styled from 'styled-components';

const Button = styled.button`
  padding: 1rem 4rem;
  border: none;
  border-radius: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'inherit')};

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.main};
  color: #fff;
`;

const SecondaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.secondaryButton};
  color: ${({ theme }) => theme.secondaryButtonText};
`;

const SuccessButton = styled(Button)`
  background-color: #12b886;
  color: #fff;
`;

const DeleteButton = styled(Button)`
  background-color: #fa5252;
  color: #fff;
`;

export { PrimaryButton, SecondaryButton, SuccessButton, DeleteButton };
