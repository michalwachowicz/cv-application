import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ThemeToggle from './ThemeToggle';

function Navigation(props) {
  const { theme, onThemeChange } = props;
  return (
    <NavContainer>
      <H1>CV Creator</H1>
      <ThemeToggle onThemeChange={onThemeChange} theme={theme} />
    </NavContainer>
  );
}

Navigation.propTypes = {
  theme: PropTypes.string.isRequired,
  onThemeChange: PropTypes.func.isRequired,
};

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 900;
`;

export default Navigation;
