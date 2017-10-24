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
import Column from '../../../../../components/Column/index';

// const Popup = styled.div`
//  padding: 12px;
//  position: absolute;
//  top: 100%;
//  background: #fff;

// `;

function ItemField(field) {  //eslint-disable-line
  return (
    <div >
      <Field name={`${field.name}.name`} component={TextInput} />
      <Field name={`${field.name}.link`} component={TextInput} />
    </div>
  );
}

function Item(name, index, fields) {  //eslint-disable-line
  return (
    <div key={index} style={{ position: 'relative' }}>
      <Column all={6} padding="0 12px 0 0">
        <Field validate={[required]} name={`${name}.name`} label={'Имя'} component={(props) => (<TextInput options={{ fullWidth: true }} {...props} />)} />
      </Column>
      <Column all={6} padding="0 0 0 12px">
        <Field validate={[required, onlyUrl]} name={`${name}.link`} label={'ссылка'} component={(props) => (<TextInput options={{ fullWidth: true }} {...props} />)} />
      </Column>
      <DeleteButton onClick={() => fields.remove(index)} />
    </div>
  );
}

const renderFields = ({ fields }) => ( // eslint-disable-line
  <div>
    Навигация
    { fields.map(Item) }
    <AddButton label="Добавить элемент навигации" onClick={() => fields.push({})} />
  </div>
);

export const Input = ({ name, index, fields }) => ( //eslint-disable-line
  <FieldArray name={`${name}.items`} component={renderFields} />
);


export default Input;
