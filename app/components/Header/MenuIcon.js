import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { palette } from '../../utils/constants';
import { hideOn } from '../../utils/style-utils';

const Icon = styled.svg`${hideOn}`;


function MenuIcon(props) {
  return (
    <Icon onClick={props.onClick} width="44px" height="36px" viewBox="-5 -5 54 46" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <path id="menu-icon" fill={props.dark ? palette.white : palette.black} d="M0,0 L44,0 L44,4.5 L0,4.5 L0,0 Z M0,31.5 L44,31.5 L44,36 L0,36 L0,31.5 Z M0,15.75 L44,15.75 L44,20.25 L0,20.25 L0,15.75 Z" />
    </Icon>
  );
}

MenuIcon.propTypes = {
  dark: PropTypes.bool,
};

export default MenuIcon;
