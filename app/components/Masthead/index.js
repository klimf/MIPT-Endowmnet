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
      <Progress progress={Math.round((props.purpose / props.collected) * 100)} />
      <Block collected={props.collected} purpose={props.purpose} />
    </FlexBox>
  );
}

Masthead.propTypes = {
  collected: PropTypes.number,
  purpose: PropTypes.number,
};

export default Masthead;
