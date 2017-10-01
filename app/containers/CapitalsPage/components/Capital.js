import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import CapitalSmall from './CapitalSmall';
import CapitalMedium from './CapitalMedium';
import CapitalLarge from './CapitalLarge';
import CapitalLargest from './СapitalLargest';
import { palette } from '../../../utils/constants';
import Button from '../../../components/Button';


const StyledLink = styled(Link)`
  color: ${palette.black};
  text-decoration: none;
  touch-action: manipulation !important;
`;

const EditableWrap = styled(StyledLink)``.withComponent('div');

// const Editable = (props) => (
//   <EditableWrap {...props} onCick={(e) => console.log(e)}>
//     {props.children}
//   </EditableWrap>
// );

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
    <Wrap
      onMouseDown={(e) => {
        e.stopPropagation();
        props.onMouseDown();
      }}
      onMouseUp={(e) => {
        e.stopPropagation();
        props.onMouseUp();
      }}
      onTouchStart={(e) => {
        e.stopPropagation();
        props.onTouchStart();
      }}
      onClick={(e) => {
        e.stopPropagation();
      }}
      to={`capital/${props.data.id}`} {...props}
    >

      <Component />
      <Button

        onMouseDown={(e) => {
          e.stopPropagation();
          console.log(e);
        }}
      ></Button>
    </Wrap>
  );
}

Capital.propTypes = {
  'data-grid': React.PropTypes.object.isRequired,
  editable: React.PropTypes.bool.isRequired,
  data: React.PropTypes.object.isRequired,
};

export default Capital;

