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
import { AddButton, DeleteButton, ImageDrop } from '../components';
import Column from '../../../../../components/Column/index';


const ListWrapper = styled.div`
  &>div {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 12px;
  }
`;
const imageDropComponent = ({ field }) => { // eslint-disable-line
  const image = field.input.value ? field.input.value.small || field.input.value.preview : null;
  return (
    <Image circle shadow src={image} />
  );
};


function Item(name, index, fields) {
  return (
    <Wrapper>
      <Field validate={[required]} name={`${name}.image`} component={ImageDrop(imageDropComponent, { forFace: true })} />
      <Space size={2} />
      <Field validate={[required]} name={`${name}.name`} component={TextInput} label="Имя" />
      <Field validate={[required]} name={`${name}.description`} component={TextInput} label="Описание" />
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
