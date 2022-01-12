import styled, { css } from 'styled-components';

const Label = styled.label`
  color: ${({ theme }) => theme.textContent};
  font-size: 1rem;
`;

const LabelRequired = styled(Label)`
  &::after {
    content: '*';
    margin-left: 0.25rem;
    color: #fa5252;
  }
`;

const Field = css`
  min-height: 3rem;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem;
  border: none;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.textColor};
  font-size: 1rem;
  transition: background-color 0.5s ease;
  -webkit-appearance: none;

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.inputActive};
  }
`;

export { Label, LabelRequired, Field };
