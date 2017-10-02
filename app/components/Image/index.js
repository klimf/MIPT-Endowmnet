/**
*
* Image
*
*/

import React from 'react';
import styled from 'styled-components';
import { hideOn } from '../../utils/helpers';
import { shadow } from '../../utils/constants';
import placeholder from '../../images/placeholder.png';

const Img = styled.img.attrs({
  src: (props) => props.src || placeholder,
})`
  width: 100%;
  height: auto;
  ${hideOn}
  ${(props) => props.rounded && 'border-radius: 8px;'}
  ${(props) => props.shadow && shadow}
`;

function Image(props) {
  return (
    <Img {...props} />
  );
}

Image.propTypes = {

};

export default Image;
