import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
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
      {React.Children.map(props.children, (child) =>
        <FormWrap onClick={props.onComponentSelect}>
          {child}
        </FormWrap>
      )}
    </Popup>
  );
}


ComponentFormModal.propTypes = {
  onCancel: PropTypes.func,
  children: PropTypes.any,
  onComponentSelect: PropTypes.func,
};

export default reduxForm({ form: 'componentForm' })(ComponentFormModal);
