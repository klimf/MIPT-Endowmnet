/**
*
* Image
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { hideOn, resolveStatic } from '../../utils/helpers';
import { shadow } from '../../utils/constants';
import placeholder from '../../images/placeholder.png';


const Img = styled.img`
  width: ${(props) => props.width ? props.width : '100%'};
  height: auto;
  margin: 0 auto;
  ${hideOn}
  ${(props) => props.rounded && 'border-radius: 8px;'}
  ${(props) => props.shadow && shadow}
`;

function FullImage(props) {
  const { src, ...otherProps } = props;
  return (
    <Img src={src ? resolveStatic(src) : placeholder} {...otherProps} />
  );
}

FullImage.propTypes = {
  src: PropTypes.string,
};

export default FullImage;
