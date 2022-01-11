import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import uniqid from 'uniqid';
import { GlobalStyles, lightTheme, darkTheme } from '../themes';
import Navigation from './Navigation';
import Container from './containers/Container';
import MainCard from './main/MainCard';
import { getCurrentTabItemId, setCurrentTabItem } from '../util/tabUtil';

function App() {
  const [theme, setTheme] = useState('dark');
  const [tabBarItems, setTabBarItems] = useState([
    { title: 'Personal', active: true, id: uniqid() },
    { title: 'Experience', active: false, id: uniqid() },
    { title: 'Download CV', active: false, id: uniqid() },
  ]);

  const setCurrentPage = (index) => {
    // TODO: Check if required fields are set
    setTabBarItems(setCurrentTabItem(tabBarItems, index));
  };

  const toggleTheme = () => {
    const updatedTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(updatedTheme);
    localStorage.setItem('theme', updatedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme);
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <>
        <Container>
          <Navigation onThemeChange={toggleTheme} theme={theme} />
          <MainCard
            tabBarItems={tabBarItems}
            onCurrentChange={setCurrentPage}
            onDisplayCV={() => {
              // TODO: Show CV Card
            }}
            onRetrieveData={() => {
              // TODO: Add retrieved data to CV Card
            }}
            index={getCurrentTabItemId(tabBarItems)}
          />
        </Container>
        <GlobalStyles />
      </>
    </ThemeProvider>
  );
}

export default App;
