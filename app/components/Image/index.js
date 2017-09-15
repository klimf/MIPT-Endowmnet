/**
*
* Image
*
*/

import React from 'react';
import styled from 'styled-components';
import { hideOn } from '../../utils/helpers';

const Img = styled.img`
   width: 100%;
   height: auto;
   ${hideOn}
`;

function Image(props) {
  return (
    <Img {...props} />
  );
}

Image.propTypes = {

};

export default Image;
