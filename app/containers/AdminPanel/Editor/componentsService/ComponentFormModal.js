import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Popup from '../../../../components/Popup';
import { palette, unit, rounded } from '../../../../utils/constants';

const FormWrap = styled.div`
background: ${palette.dark};
padding: ${unit}px;
${rounded};
margin-bottom: ${unit}px;
transition: .3s all ease-in-out;
&:hover {
  cursor: pointer;
  background: ${palette.gray};
}
`;

function ComponentFormModal(props) {
  return (
    <Popup
      title={'Выберите тип блока'}
      show={props.show}
      onCancel={props.onCancel}
    >
      {props.forms.map(({ preview, name }) => (
        <FormWrap key={name} onClick={() => props.onComponentSelect(name)}>
          {preview}
        </FormWrap>
        )
      )}
    </Popup>
  );
}

ComponentFormModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  forms: PropTypes.array.isRequired,
  onComponentSelect: PropTypes.func.isRequired, // eslint-disable-line
  show: PropTypes.bool.isRequired,
};

export default ComponentFormModal;
