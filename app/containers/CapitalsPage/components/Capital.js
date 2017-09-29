import React from 'react';
import CapitalSmall from './CapitalSmall';
import CapitalMedium from './CapitalMedium';
import CapitalLarge from './CapitalLarge';
import styled from 'styled-components';
import { Link } from 'react-router';
import { palette } from '../../../utils/constants';

const capitals = [CapitalSmall, CapitalMedium, CapitalLarge];

const StyledLink = styled(Link)`
  color: ${palette.black};
  text-decoration: none;
  font-weight: 300;
`;

const EditableWrap = styled(StyledLink)``.withComponent('div');

function resolveCapital(dataGrid) {
  if(dataGrid.w === 2 && dataGrid.h === 1) {
    return CapitalSmall
  } else if (dataGrid.w === 3 && dataGrid.h === 2) {
    return CapitalMedium
  } else if(dataGrid.w === 4 && dataGrid.h === 2) {
    return CapitalLarge
  } else if (dataGrid.w === 6 && dataGrid.h === 1) {
    return CapitalLarge
  }
}

function Capital(props) {
  const Component = resolveCapital(props['data-grid']);
  const Wrap = props.editable ? EditableWrap : StyledLink;

  return (
    <Wrap {...props}>
      <Component  {...props} />
    </Wrap>
  );
}

export default Capital;
