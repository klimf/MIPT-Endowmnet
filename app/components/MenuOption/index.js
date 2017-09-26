// import React from 'react';
import styled from 'styled-components';
import { unit, palette } from '../../utils/constants';


export default styled.div`
  padding: ${unit};
  border-bottom: 2px solid ${palette.gray};
  &:hover {
    background: ${palette.disabled}
  }
  ${(props) =>
  (props.active && `background: ${palette.disabled}`)
  }
`;
