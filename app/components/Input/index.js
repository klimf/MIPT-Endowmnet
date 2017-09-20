/**
*
* Input
*
*/

import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';
import * as Validation from 'react-validation/lib/build/validation.rc';
import { palette } from '../../utils/constants';
// ebanuy crutch by react-validation developer
import validations from './validations'; // eslint-disable-line

const StyledInput = styled(Validation.Input).attrs({
  type: (props) => props.type || 'text',
})`
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

const CheckBox = styled.input`${CheckStyle}`;

function Input(props) {
  return (
    <div>
      <StyledLabel for={props.name} noAll={!props.label} >
        { props.label }
        { props.type === 'checkbox'
          ? <CheckBox {...props}></CheckBox>
          : <StyledInput {...props}></StyledInput>
          }
      </StyledLabel>
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
