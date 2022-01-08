import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sunSvg from '../assets/sun.svg';
import moonSvg from '../assets/moon.svg';

function ThemeToggle(props) {
  const { theme, onThemeChange } = props;
  return (
    <>
      {theme !== 'dark' || (
        <DarkLabel htmlFor="theme-toggle">
          <ImgContainer>
            <Img src={moonSvg} alt="Moon Icon" />
          </ImgContainer>
        </DarkLabel>
      )}
      {theme === 'dark' || (
        <LightLabel htmlFor="theme-toggle">
          <ImgContainer>
            <Img src={sunSvg} alt="Sun Icon" />
          </ImgContainer>
        </LightLabel>
      )}
      <Toggle type="checkbox" id="theme-toggle" onClick={onThemeChange} />
    </>
  );
}

ThemeToggle.propTypes = {
  theme: PropTypes.string.isRequired,
  onThemeChange: PropTypes.func.isRequired,
};

const Label = styled.label`
  position: relative;
  display: block;
  width: 4rem;
  height: 2rem;
  margin-left: auto;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.5s ease;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.25);
`;

const LightLabel = styled(Label)`
  background: #fab005 linear-gradient(45deg, #f08c00, #fab005);
`;

const DarkLabel = styled(Label)`
  background: #845ef7 linear-gradient(45deg, #7950f2, #5f3dc4);

  & > div {
    left: calc(100% - 0.25rem);
    transform: translateX(-100%);
  }
`;

const Img = styled.img`
  width: 1rem;
  height: 1rem;
`;

const ImgContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  top: 0.25rem;
  left: 0.25rem;
  background-color: #fff;
  border-radius: 100px;
`;

const Toggle = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;
`;

export default ThemeToggle;
