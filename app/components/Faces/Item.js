/**
*
* Face
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { image, palette, shadow } from '../../utils/constants';
import Space from '../Space/index';
import { media } from '../../utils/helpers';

export const Wrapper = styled.div`
  position: relative;
  padding: 0 12px 24px;
  width: 25%;
  display: inline-block;
  text-align: center;
  margin: 0;
  overflow: hidden;
  & h2 {
    font-weight: 400;
    margin: 0 0 12px 0;
  }
  
  & p {
    margin: 0;
    font-weight: 400;
    color: ${palette.gray};
  }
  ${media.small`
    width: 50%;
  `}
`;
export const Image = styled.div`
    background-position: center;
    width: 80%;
    margin: 0 10% 12px 10%;
    padding: 40% 0;
    border-radius: 50%;
    overflow: hidden;
    ${image}
    ${shadow}
`;

function Face(props) {
  return (
    <Wrapper>
      <Image local={props.local} src={props.image.original ? props.image.small : props.image} />
      <Space size={2} />
      <h2>{props.name}</h2>
      <p>{props.status}</p>
    </Wrapper>
  );
}

Face.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  local: PropTypes.bool,
};

export default Face;
