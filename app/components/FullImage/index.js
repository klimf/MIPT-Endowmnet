/**
*
* Image
*
*/

import React from 'react';
import styled from 'styled-components';
import { hideOn } from '../../utils/helpers';
import { shadow } from '../../utils/constants';

const Img = styled.img`
  width: 100%;
  height: auto;
  ${hideOn}
  ${(props) => props.rounded && 'border-radius: 8px;'}
  ${(props) => props.shadow && shadow}
`;

function FullImage(props) {
  return (
    <Img {...props} />
  );
}

FullImage.propTypes = {

};

export default FullImage;