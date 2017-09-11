/**
*
* Social
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { palette } from '../../utils/constants';
import { hideOn } from '../../utils/style-utils';

import VkIcon from './VkIcon';
import FbIcon from './FbIcon';
import TgIcon from './TgIcon';

const Wrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.expand ? 'space-between' : 'space-around'};
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 36px;
  ${(props) => !props.expand && 'max-width: 400px;'}
  ${hideOn}
`;

const Link = styled.a`
  transition: 0.3s ease;
  
  & path {
    transition: 0.3s ease;
  }
  &:hover path {
    fill: ${palette.primary};
  }
  &:hover {
    transform: scale(1.2);
  }
`;


function Social(props) {
  return (
    <Wrapper {...props}>
      <Link href="http://facebook.com" target="_blank"><FbIcon dark={props.dark} /></Link>
      <Link href="http://vk.com" target="_blank"><VkIcon dark={props.dark} /></Link>
      <Link href="http://telegram.org" target="_blank"><TgIcon dark={props.dark} /></Link>
    </Wrapper>
  );
}

Social.propTypes = {
  dark: PropTypes.bool,
  expand: PropTypes.bool,
};

export default Social;
