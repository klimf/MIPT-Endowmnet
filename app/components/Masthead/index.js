/**
*
* Masthead
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Progress from './Progress';
import FlexBox from '../FlexBox';
import Space from '../Space';
import Block from './Block';

function Masthead() {
  return (
    <div>
      <Space size={4} />
      <FlexBox horisontal="space-between">
        <Progress progress={87} />
        <Block />
      </FlexBox>
    </div>
  );
}

Masthead.propTypes = {

};

export default Masthead;
