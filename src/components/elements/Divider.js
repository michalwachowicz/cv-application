import styled from 'styled-components';

const Divider = styled.hr`
  border: none;
  border-top: 2px solid ${({ color, theme }) => color || theme.input};
`;

export default Divider;
