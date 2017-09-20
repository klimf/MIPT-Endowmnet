/**
*
* Input
*
*/

import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';
import { palette } from '../../utils/constants';

const TextStyle = css`
  width: 100%;
  height: 36px;
  margin: 8px 0;
  padding: 0 12px;
  outline: none;
  border-radius: 8px;
  border: 3px solid ${palette.disabled};
  transition: 0.3s;
  &:hover {
    border: 3px solid ${palette.gray};
  }
  &:focus {
    border: 3px solid ${palette.primary};
    padding: 0 24px;
  }
`;

const CheckStyle = css`
  margin: 4px;
  outline: none;
  float: left;
`;

const StyledLabel = styled.label`
  width: 100%;
  margin: 8px 2px ;
  font-size: 20px;
  font-weight: 400;
  height: 36px;
`;

function Input(props) {
  let StyledInput = styled.input`${TextStyle}`;
  if (props.type === 'checkbox') StyledInput = styled.input`${CheckStyle}`;
  return (
    <div>
      <StyledLabel>
        {props.label && props.label}
        <StyledInput checked={props.checked} onChange={props.onClick} placeholder={props.placeholder && props.placeholder} type={props.type ? props.type : 'text'}>
          {props.value && props.value}
        </StyledInput>
      </StyledLabel>
    </div>
  );
}

Input.propTypes = {
  onClick: PropTypes.func,
  checked: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
