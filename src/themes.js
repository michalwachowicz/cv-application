import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.textColor};
    font-family: 'Roboto', sans-serif;
    transition: background-color 0.2s ease, color 0.2s ease;
    overflow-x: hidden;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  #cv {
    position: absolute;
    left: 200vw;
  }
`;

const lightTheme = {
  body: '#E9ECEF',
  textColor: '#212529',
  textContent: '#868E96',
  main: '#845EF7',
  card: '#fff',
  cardInactive: '#DEE2E6',
  cardInactiveCircle: '#868E96',
  cardInactiveText: '#ADB5BD',
  input: '#DEE2E6',
  inputActive: '#CED4DA',
  secondaryButton: '#DEE2E6',
  secondaryButtonText: '#868E96',
};

const darkTheme = {
  body: '#171A1D',
  textColor: '#fff',
  textContent: '#ADB5BD',
  main: '#845EF7',
  card: '#343A40',
  cardInactive: '#262B30',
  cardInactiveCircle: '#495057',
  cardInactiveText: '#868E96',
  input: '#495057',
  inputActive: '#575F67',
  secondaryButton: '#575F67',
  secondaryButtonText: '#fff',
};

export { GlobalStyles, lightTheme, darkTheme };
