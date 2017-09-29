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
  touch-action: manipulate !important;
`;

const EditableWrap = styled(StyledLink)``.withComponent('div');
const capitalMap = {
  '2:1': CapitalSmall,
  '3:2': CapitalMedium,
  '4:2': CapitalLarge,
  '6:2': CapitalLarge,
};


function Capital(props) {
  console.log(props);
  const {w, h} = props['data-grid'];
  const Component = capitalMap[`${w}:${h}`];
  const Wrap = props.editable ? EditableWrap : StyledLink;

  return (
    <Wrap to={`capital/${props.data.id}`} {...props}>
      <Component  {...props.data} />
    </Wrap>
  );
}

Capital.propTypes = {
  'data-grid': React.PropTypes.object.isRequired,
  editable: React.PropTypes.bool.isRequired,
  data: React.PropTypes.object.isRequired,
};

export default Capital;
