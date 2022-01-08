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
};

const darkTheme = {
  body: '#171A1D',
  textColor: '#fff',
};

export { GlobalStyles, lightTheme, darkTheme };
