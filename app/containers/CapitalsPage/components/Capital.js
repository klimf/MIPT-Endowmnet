import React from 'react';
import CapitalSmall from './CapitalSmall';
import CapitalMedium from './CapitalMedium';
import CapitalLarge from './CapitalLarge';
import CapitalLargest from './СapitalLargest';
import styled from 'styled-components';
import { Link } from 'react-router';
import { palette } from '../../../utils/constants';

const capitals = [CapitalSmall, CapitalMedium, CapitalLarge];

const StyledLink = styled(Link)`
  color: ${palette.black};
  text-decoration: none;
  touch-action: manipulate !important;
`;

const EditableWrap = styled(StyledLink)``.withComponent('div');

export const capitalMap = {
  '2:1': CapitalSmall,
  '3:2': CapitalMedium,
  '4:2': CapitalLarge,
  '6:2': CapitalLargest,
};


function Capital(props) {
  const { w, h } = props['data-grid'];
  const Component = capitalMap[`${w}:${h}`];
  const Wrap = props.editable ? EditableWrap : StyledLink;
  return (
    <Wrap to={`capital/${props.data.id}`} {...props}>
      <Component {...props.data} preview={props.preview} />
    </Wrap>
  );
}

Capital.propTypes = {
  'data-grid': React.PropTypes.object.isRequired,
  editable: React.PropTypes.bool.isRequired,
  data: React.PropTypes.object.isRequired,
};

export default Capital;
