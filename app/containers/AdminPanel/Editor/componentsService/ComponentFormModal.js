import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Popup from '../../../../components/Popup';
import { palette, unit, rounded } from '../../../../utils/constants';

const FormWrap = styled.div`
background: ${palette.dark};
padding: ${unit}px;
${rounded};
`;

function ComponentFormModal(props) {
  return (
    <Popup
      show
      onCancel={props.onCancel}
    >
      {props.forms.map(({ preview, name }) =>
        <FormWrap key={name} onClick={() => props.onComponentSelect(name)}>
          <preview></preview>
        </FormWrap>
      )}
    </Popup>
  );
}

ComponentFormModal.propTypes = {
  onCancel: PropTypes.func,
  forms: PropTypes.array.isRequired,
  onComponentSelect: PropTypes.func, // eslint-disable-line
};

export default ComponentFormModal;
