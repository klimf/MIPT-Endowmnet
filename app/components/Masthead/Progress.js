import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { palette, shadow } from '../../utils/constants';
import { media } from '../../utils/helpers';

const Wrapper = styled.div`
    width: 240px;
    ${media.small`
      width: 60%;
      margin: 0 20%;
    `}
`;

const Circle = styled.div`
  position: relative;
  overflow: hidden;
  float: left;
  z-index: 10;
  background-color: ${palette.secondary};
  width: 100%;
  padding: 50% 0;
  border-radius: 50%;
  ${shadow}
`;

const CircleInner = styled.div`
  position: absolute;
  left: ${(props) => (100 - props.progress) / 2}%;
  top: ${(props) => (100 - props.progress) / 2}%;
  background-color: ${palette.primary};
  width: ${(props) => props.progress}%;
  height: ${(props) => props.progress}%;
  border-radius: 50%;
  box-shadow: 0 0 8px 0 rgba(70,116,184,0.63);
`;

const Value = styled.h1`
  position: absolute;
  width: 100%;
  top: 50%;
  margin: -16px 0;
  font-weight: 300;
  font-size: 42px;
  text-align: center;
  color: ${palette.white};
`;

function Progress(props) {
  return (
    <Wrapper>
      <Circle>
        <CircleInner progress={props.progress} />
        <Value>{props.progress}%</Value>
      </Circle>
    </Wrapper>
  );
}

Progress.propTypes = {
  progress: PropTypes.number,
};

export default Progress;
