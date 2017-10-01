import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import CapitalSmall from './CapitalSmall';
import CapitalMedium from './CapitalMedium';
import CapitalLarge from './CapitalLarge';
import CapitalLargest from './СapitalLargest';
import { palette, unit } from '../../../utils/constants';
import Button from '../../../components/Button';


const StyledLink = styled(Link)`
  color: ${palette.black};
  text-decoration: none;
  touch-action: manipulation !important;
`;

const EditableWrap = styled(StyledLink)``.withComponent('div');

const EditToolBarWrap = styled.div`
  position: absolute;
  z-index: 5;
  top: ${unit * 2}px;
  right: ${unit * 2}px;
  display: flex;
`;

const Editable = (props) => (
  <EditableWrap {...props}>
    <EditToolBarWrap>
      <Button
        onMouseDown={(e) => {
          e.stopPropagation();
          props.onBlockEditStart(props.data);
        }}
      >...</Button>
      <Button
        onMouseDown={(e) => {
          e.stopPropagation();
          props.onBlockDeleteStart(props.data);
        }}
      >/</Button>
    </EditToolBarWrap>
    {props.children}
  </EditableWrap>
);

Editable.propTypes = {
  onBlockDeleteStart: React.PropTypes.func,
  data: React.PropTypes.object,
  children: React.PropTypes.any,
};

const PreviewWrap = styled(StyledLink)``.withComponent('div');

export const capitalMap = {
  '2:1': CapitalSmall,
  '3:2': CapitalMedium,
  '4:2': CapitalLarge,
  '6:2': CapitalLargest,
};

const wrapMap = {
  preview: PreviewWrap,
  editable: Editable,
  link: StyledLink,
};

function Capital(props) {
  const { w, h } = props['data-grid'];
  const Component = capitalMap[`${w}:${h}`];
  const Wrap = wrapMap[props.type] || wrapMap.link;
  return (
    <Wrap
      to={`capital/${props.data.id}`}
      {...props}
    >
      <Component preview={props.type === 'preview'} data={props.data} />
    </Wrap>
  );
}

Capital.propTypes = {
  'data-grid': React.PropTypes.object.isRequired,
  type: React.PropTypes.string.isRequired,
  data: React.PropTypes.object.isRequired,
};

export default Capital;

