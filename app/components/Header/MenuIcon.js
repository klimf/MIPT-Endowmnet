import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { hideOn } from '../../utils/style-utils';

const Icon = styled.svg`
  margin: 9px 0;
  ${hideOn}
`;


function MenuIcon(props) {
  return (
    <Icon {...props} width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect id="border" stroke="#4674B8" fill="transparent" strokeWidth="3" x="1.5" y="1.5" width="39" height="39" rx="8" />
      <path d="M11,14 C11,13.4477153 11.4553056,13 11.9918031,13 L30.0081969,13 C30.5559546,13 31,13.4438648 31,14 C31,14.5522847 30.5446944,15 30.0081969,15 L11.9918031,15 C11.4440454,15 11,14.5561352 11,14 Z M11,28 C11,27.4477153 11.4553056,27 11.9918031,27 L30.0081969,27 C30.5559546,27 31,27.4438648 31,28 C31,28.5522847 30.5446944,29 30.0081969,29 L11.9918031,29 C11.4440454,29 11,28.5561352 11,28 Z M11,21 C11,20.4477153 11.4553056,20 11.9918031,20 L30.0081969,20 C30.5559546,20 31,20.4438648 31,21 C31,21.5522847 30.5446944,22 30.0081969,22 L11.9918031,22 C11.4440454,22 11,21.5561352 11,21 Z" id="icon" fill="#31353E" />
    </Icon>
  );
}

MenuIcon.propTypes = {
  dark: PropTypes.bool,
  onClick: PropTypes.func,
};

export default MenuIcon;
