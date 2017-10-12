import React, { Component } from 'react';  //eslint-disable-line
import { Field, FieldArray } from 'redux-form';
import styled from 'styled-components'; //eslint-disable-line
import {
  LongTextInput,  //eslint-disable-line
  TextInput,
} from 'admin-on-rest';
import { AddButton, DeleteButton } from '../components';
import { Navigation, NavItem } from '../../../../../components/Navigation'; //eslint-disable-line
import { required, onlyUrl } from '../../../resources/validation';

// const Popup = styled.div`
//  padding: 12px;
//  position: absolute;
//  top: 100%;
//  background: #fff;

// `;

function ItemField(field) {  //eslint-disable-line
  return (
    <div >
      <Field name={`${field.name}.name`} component={TextInput}></Field>
      <Field name={`${field.name}.link`} component={TextInput}></Field>
    </div>
  );
}

function Item(name, index, fields) {  //eslint-disable-line
  return (
    <div key={index} style={{ position: 'relative' }}>
      <Field validate={[required]} name={`${name}.name`} label={'Имя'} component={TextInput}></Field>
      <Field validate={[required, onlyUrl]} name={`${name}.link`} label={'ссылка'} component={TextInput}></Field>
      <DeleteButton onClick={() => fields.remove(index)}>Удалить</DeleteButton>
    </div>
  );
}

const renderFields = ({ fields }) => ( // eslint-disable-line
  <div>
    Навигация
    { fields.map(Item) }
    <AddButton onClick={() => fields.push({})}>Добавить</AddButton>
  </div>
);

export const Input = ({ name, index, fields }) => ( //eslint-disable-line
  <FieldArray name={`${name}.items`} component={renderFields}></FieldArray>
);


export default Input;
