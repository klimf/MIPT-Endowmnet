/**
*
* Input
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { palette } from '../../utils/constants';


const StyledInput = styled.input`
  width: 100%;
  height: 36px;
  margin: 8px 0;
  padding: 0 12px;
  outline: none;
  border-radius: 8px;
  border: 3px solid ${palette.disabled};
  transition: 0.3s;
  &:focus {
    border: 3px solid ${palette.primary};
    padding: 0 24px;
  }
`;

const StyledLabel = styled.label`
  width: 100%;
  margin: 8px 2px ;
  font-size: 20px;
  font-weight: 400;
  height: 36px;
`;

function Input(props) {
  return (
    <div>
      <StyledLabel noAll={!props.label} >{props.label}</StyledLabel>
      <StyledInput placeholder={props.placeholder && props.placeholder} type={props.type || 'text'}>
        {props.value && props.value}
      </StyledInput>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
