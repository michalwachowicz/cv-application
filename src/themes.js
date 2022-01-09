import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.textColor};
    font-family: 'Roboto', sans-serif;
    transition: background-color 0.2s ease, color 0.2s ease;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const lightTheme = {
  body: '#E9ECEF',
  textColor: '#212529',
  main: '#845EF7',
  card: '#fff',
  cardInactive: '#DEE2E6',
};

const darkTheme = {
  body: '#171A1D',
  textColor: '#fff',
  main: '#845EF7',
  card: '#343A40',
  cardInactive: '#262B30',
};

export { GlobalStyles, lightTheme, darkTheme };
