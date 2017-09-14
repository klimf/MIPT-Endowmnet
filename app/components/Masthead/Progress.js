import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { palette } from '../../utils/constants';

const Circle = styled.div`
  position: relative;
  z-index: 10;
  background-color: ${palette.secondary};
  width: 240px;
  height: 240px;
  border-radius: 50%;
  box-shadow: 0 12px 24px ${palette.dark};
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
  top: 104px;
  margin: 0;
  font-weight: 300;
  font-size: 42px;
  text-align: center;
  color: ${palette.white};
`;

function Progress(props) {
  return (
    <Circle>
      <CircleInner progress={props.progress} />
      <Value>{props.progress}%</Value>
    </Circle>
  );
}

Progress.propTypes = {
  progress: PropTypes.number,
};

export default Progress;
