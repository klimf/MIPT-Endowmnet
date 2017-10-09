import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Popup from '../../../../components/Popup';
import { palette, unit, rounded } from '../../../../utils/constants';

const ComponentWrap = styled.div`
background: ${palette.dark};
${(props) => props.selected && `background: ${palette.primary} !important;`}
padding: ${unit}px;
margin-bottom: ${unit}px;
${rounded};
position: relative;
transition: .3s all ease-in-out;
&:hover {
  cursor: pointer;
  background: ${palette.gray};
}
&:after {
  content: ${(props) => props.sizeProperty};
  position: absolute;
}
`;

export default function ComponentSelectionModal(props) {
  const { components } = props;
  return (
    <Popup
      show
      onCancel={props.onCancel}
    >
      {components.map(({ name, Component }) =>
        <ComponentWrap onClick={() => props.onComponentSelect(name)}>
          <Component></Component>
        </ComponentWrap>
      )}
    </Popup>
  );
}


ComponentSelectionModal.propTypes = {
  onCancel: PropTypes.func,
  components: PropTypes.array,
  onComponentSelect: PropTypes.func, // eslint-disable-line
};
