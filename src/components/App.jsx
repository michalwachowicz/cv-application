import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import uniqid from 'uniqid';
import { GlobalStyles, lightTheme, darkTheme } from '../themes';
import Navigation from './Navigation';
import Container from './containers/Container';
import MainCard from './main/MainCard';
import { getCurrentTabItemIndex, setCurrentTabItem } from '../util/tabUtil';
import ErrorAlert from './elements/ErrorAlert';

function App() {
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [userData, setUserData] = useState({});
  const [tabBarItems, setTabBarItems] = useState([
    { title: 'Personal', active: true, id: uniqid() },
    { title: 'Experience', active: false, id: uniqid() },
    { title: 'Download CV', active: false, id: uniqid() },
  ]);
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'birthdate',
    'gender',
  ];

  const setCurrentPage = (index) => {
    if (index === getCurrentTabItemIndex(tabBarItems)) return;
    for (const field of requiredFields) {
      if (!userData[field] || !error) {
        setError('You have to enter values to all required fields');
        setTimeout(() => {
          setError(null);
        }, 2000);
        return;
      }
    }
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

  const updateUserData = ({ id, value }) => {
    setUserData((prevState) => ({ ...prevState, [id]: value }));
  };

  const updatePhoto = (url) => {
    if (userData.photo) URL.revokeObjectURL(userData.photo);
    setUserData((prevState) => ({ ...prevState, photo: url }));
  };

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <>
        <Container>
          <Navigation onThemeChange={toggleTheme} theme={theme} />
          <MainCard
            index={getCurrentTabItemIndex(tabBarItems)}
            userData={Object.create(userData)}
            tabBarItems={tabBarItems}
            onCurrentChange={setCurrentPage}
            onDisplayCV={() => {
              // TODO: Show CV Card
            }}
            onRetrieveData={updateUserData}
            onUploadImage={updatePhoto}
            onDownloadCV={() => {
              // TODO: Create download CV logic
            }}
          />
        </Container>
        <ErrorAlert message={error} />
        <GlobalStyles />
      </>
    </ThemeProvider>
  );
}

export default App;
