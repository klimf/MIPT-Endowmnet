/**
*
* Face
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { palette } from '../../utils/constants';

const Wrapper = styled.div`
  text-align: center;
  margin: 0;
  & h2 {
    font-weight: 400;
    margin: 0;
  }
  
  & p {
    margin: 0 0 24px 0;
    font-weight: 400;
    color: ${palette.disabled};
  }
`;
const Image = styled.div`
    background-position: center;
    width: 80%;
    margin: 0 10% 12px 10%;
    padding: 40% 0;
    border-radius: 50%;
    overflow: hidden;
`;

function Face(props) {
  return (
    <Wrapper>
      <Image src={props.image} />
      <h2>{props.name}</h2>
      <p>{props.status}</p>
    </Wrapper>
  );
}

Face.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
};

export default Face;
