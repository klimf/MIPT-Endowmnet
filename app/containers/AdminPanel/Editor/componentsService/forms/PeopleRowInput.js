import React from 'react';
import { Field, FieldArray } from 'redux-form';
import {
    TextInput,
  } from 'admin-on-rest';
import styled from 'styled-components';
import { Wrapper, Image } from '../../../../../components/Faces/Item';
import Title from '../../../../../components/Title';
import Space from '../../../../../components/Space';
import { required } from '../../../resources/validation';
import { AddButton, DeleteButton, HoverableImageWrapper } from '../components';
import Column from '../../../../../components/Column/index';


const ListWrapper = styled.div`
  &>div {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 12px;
  }
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
    forFace
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
      <Field validate={[required]} name={`${name}.picture`} component={ImageDrop(name)} />
      <Space size={2} />
      <Field validate={[required]} name={`${name}.name`} component={TextInput} label="Имя" />
      <Field validate={[required]} name={`${name}.description`} component={TextInput} label="Имя" />
      <DeleteButton label="Удалить" style={{ position: 'static', margin: '12px 0' }} onClick={() => fields.remove(index)} />
    </Wrapper>
  );
}

const renderPeopleFields = ({ fields }) => ( // eslint-disable-line
  <div>
    <Column all={12}>
      { fields.map(Item) }
    </Column>
    <AddButton label="Добавить человека" onClick={() => fields.push({})} />
  </div>
    );

export default function Faces({ name }) { // eslint-disable-line
  return (
    <div>
      <Title >
        <Column all={6}>
          <Field validate={[required]} name={`${name}.title`} component={(props) => (<TextInput options={{ fullWidth: true }} {...props} />)} label="Загловок" />
        </Column>
      </Title>
      <Space size={2} />
      <ListWrapper>
        <FieldArray name={`${name}.items`} component={renderPeopleFields} />
      </ListWrapper>
    </div>
  );
}
