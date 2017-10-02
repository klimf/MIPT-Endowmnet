/**
*
* ImgDesc
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { media } from '../../utils/helpers';
import { image, rounded, shadow } from '../../utils/constants';

import placeholder from '../../images/placeholder.png';

const About = styled.div`
  position: relative;
  display: flex;
  ${media.small`
    flex-direction: column-reverse;
    flex-wrap:wrap;
  `}
`;

const Description = styled.p`
  font-size: 20px;
  margin: 0;
  height: 100%;
`;

const AboutImage = styled.div.attrs({
  src: (props) => props.src || placeholder,
})`
  min-width: 400px;
  margin: 0 0 0 24px;
  min-height: 100%;
  max-height: 400px;
  ${image}
  ${rounded}
  ${shadow}
  ${media.medium`
    min-width: 300px;
  `}
  ${media.small`
    height: 320px;
    margin: 0 0 24px 0;
    min-width: 100%;
    max-width: 100%;
  `}
`;

function ImgDesc(props) {
  return (
    <About>
      <Description>{props.description}</Description>
      <AboutImage src={props.image} />
    </About>
  );
}

ImgDesc.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
};

export default ImgDesc;
