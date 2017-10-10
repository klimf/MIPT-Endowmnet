import React from 'react';
import { Field, FieldArray } from 'redux-form';
import {
    TextInput,
  } from 'admin-on-rest';
import { RaisedButton } from 'material-ui';
import styled from 'styled-components';
import { Wrapper, Image } from '../../../../../components/Faces/Item';
import { Wrapper as ListWrapper } from '../../../../../components/Faces';
import Title from '../../../../../components/Title';
import Space from '../../../../../components/Space';
import { required } from '../../../resources/validation';
import { AddButton, HoverableImageWrapper } from '../components';

const DeleteButton = styled(RaisedButton)`
right: 0;
`;

const imageStrategy = (item, field) => {
  if (!field.input.value && item.image) {
    return item.image.small;
  }
  if (field.input.value) {
    return field.input.value.preview;
  }
  return null;
};

const ImageDrop = (item) => (field) => (
  <HoverableImageWrapper
    accept={'image/*'}
    onDrop={(files) => {
      field.input.onChange({
        preview: files[0].preview,
        file: files[0] });
    }
      }
  >
    <Image local={field.input.value} circle shadow src={imageStrategy(item, field)} />
  </HoverableImageWrapper>
    );

function Item(name, index, fields) {
  return (
    <Wrapper>
      <Field name={`${name}.picture`} component={ImageDrop(name)} />
      <Space size={2} />
      <h2>
        <Field validate={[required]} name={`${name}.name`} component={TextInput} label="Имя" />
      </h2>
      <p>
        <Field validate={[required]} name={`${name}.description`} component={TextInput} label="Имя" />
      </p>
      <DeleteButton onClick={() => fields.remove(index)}>Удалить</DeleteButton>
    </Wrapper>
  );
}

const renderPeopleFields = ({ fields }) => ( // eslint-disable-line
  <div>
    { fields.map(Item) }
    <AddButton onClick={() => fields.push({})}>Добавить</AddButton>
  </div>
    );

export default function Faces({ name }) { // eslint-disable-line
  return (
    <div>
      <Title >
        <Field validate={[required]} name={`${name}.title`} component={TextInput} label="Загловок" />
      </Title>
      <Space size={2} />
      <ListWrapper>
        <FieldArray name={`${name}.items`} component={renderPeopleFields}></FieldArray>
      </ListWrapper>
    </div>
  );
}
