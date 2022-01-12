import styled, { css } from 'styled-components';

const WrapperStyles = css`
  width: 100%;

  & > * {
    margin-bottom: ${({ size }) => size};
  }

  & > :last-child {
    margin-bottom: 0;
  }
`;

const Wrapper = styled.div`
  ${WrapperStyles}
`;

export { Wrapper, WrapperStyles };
