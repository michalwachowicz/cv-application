import styled from 'styled-components';

const Divider = styled.hr`
  border: none;
  border-top: 2px solid ${({ theme }) => theme.input};
`;

export default Divider;
