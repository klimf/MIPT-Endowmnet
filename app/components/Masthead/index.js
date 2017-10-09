/**
*
* Masthead
*
*/

import React, { PropTypes } from 'react';

import Progress from './Progress';
import FlexBox from '../FlexBox';
import Block from './Block';

function Masthead(props) {
  return (
    <FlexBox horisontal="space-between">
      <Progress progress={Math.round((props.collected / props.purpose) * 100)} />
      <Block collected={props.purpose} purpose={props.collected} />
    </FlexBox>
  );
}

Masthead.propTypes = {
  purpose: PropTypes.number,
  collected: PropTypes.number,
};

Masthead.defaultProps = {
  purpose: 1000000000,
  collected: 783400000,
};

export default Masthead;
