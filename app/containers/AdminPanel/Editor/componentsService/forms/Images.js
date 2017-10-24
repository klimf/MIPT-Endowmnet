import React from 'react';
import { Field, FieldArray } from 'redux-form';
import styled from 'styled-components';
import { palette } from 'utils/constants';
import { resolveStatic } from 'utils/helpers';
import Dropzone from 'react-dropzone';
import {
  TextInput,
} from 'admin-on-rest';
import { required } from '../../../resources/validation';
import { AddButton, DeleteButton } from '../components';
import { List } from '../../../../../components/Partners';
import Title from '../../../../../components/Title';
import Column from '../../../../../components/Column/index';
import restClient, { setAttachment } from '../../../restClient';
import { UPLOAD } from '../../../actions';

const ImageWrapper = styled(Dropzone)`
position: relative;
display: inline-block;
&:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, .2);
  transition: 0.3s ease;
}
`;

const ItemWrapper = styled.div`
  background: ${palette.dark};
  display: inline-block;
  padding-right: 12px;
`;

const ImageDrop = (field) => (
  <ImageWrapper
    accept={'image/png,image/jpg,image/jpeg'}
    onDrop={(files) => {
      restClient(UPLOAD, null, setAttachment('image', files[0]))
      .then((response) => {
        field.input.onChange(response.data);
      });
    }}
  >
    <img
      src={resolveStatic(field.input.value ? field.input.value.small || field.input.value.preview : null)}
      alt="alt"//eslint-disable-line
    />
  </ImageWrapper>
    );

function Item(name, index, fields) {
  return (
    <ItemWrapper>
      <Field validate={[required]} name={`${name}`} component={ImageDrop} />
      <DeleteButton style={{ position: 'static', margin: '12px 0' }} onClick={() => fields.remove(index)} />
    </ItemWrapper>
  );
}

const renderFields = ({ fields }) => ( // eslint-disable-line
  <div>
    <List>
      <Column all={12}>
        { fields.map(Item) }
      </Column>
    </List>
    <AddButton label="Добавить изображение" onClick={() => fields.push({})} />
  </div>
);

export const ImagesInput = ({ name, index, fields }) => ( //eslint-disable-line
  <div>
    <Title >
      <Column all={6}>
        <Field validate={[required]} name={`${name}.title`} component={(props) => (<TextInput options={{ fullWidth: true }} {...props} />)} label="Загловок" />
      </Column>
    </Title>

    <FieldArray name={`${name}.items`} component={renderFields} />

  </div>
);

export default ImagesInput;
