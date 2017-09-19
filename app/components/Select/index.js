/**
*
* Input
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { palette } from '../../utils/constants';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  margin: 0 auto;
  border-radius: 18px;
  min-height: 36px;
  overflow: hidden;
`;

const Part = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 50%;
  min-height: 36px;
  font-size: 20px;
  padding: 8px 12px 4px;
  color: ${palette.white};
  background-color: ${(props) => props.active ? palette.primary : palette.disabled};
  font-weight: ${(props) => props.active ? 300 : 400};
`;

function Select(props) {
  return (
    <Wrapper>
      <Part active={!props.isRight}>{props.left}</Part>
      <Part active={props.isRight}>{props.right}</Part>
    </Wrapper>
  );
}

Select.propTypes = {
  left: PropTypes.string,
  right: PropTypes.string,
  isRight: PropTypes.bool,
};

export default Select;
