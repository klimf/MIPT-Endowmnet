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
  background-color: ${palette.disabled};
  transition: 0.3s;
  &:hover {
    background-color: ${palette.gray};
  }
`;

const Part = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 50%;
  min-height: 36px;
  font-size: 20px;
  padding: 8px 12px 4px;
  color: ${palette.white};
  font-weight: 400;
`;

const Die = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  border-radius: 18px;
  transition: 0.3s ease;
  background-color: ${palette.primary};
  ${(props) => props.active ? 'left: 0;' : 'left: 50%;'}
`;

function Select(props) {
  return (
    <Wrapper onClick={props.onClick}>
      <Die active={props.isRight} />
      <Part>{props.left}</Part>
      <Part>{props.right}</Part>
    </Wrapper>
  );
}

Select.propTypes = {
  left: PropTypes.string,
  right: PropTypes.string,
  isRight: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Select;
