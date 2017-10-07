import React from 'react';
import {
  List,
  Datagrid,
  Edit,
  TextField,
  EditButton,
  TextInput,
  SimpleForm,
} from 'admin-on-rest';
import { required } from '../validation';

export const OptionsList = (props) => (
  <List title={'Опции'} {...props}>
    <Datagrid>
      <TextField label={'Название'} source="name" />
      <TextField label={'Значение'} source="value" />
      <EditButton label={'Редактировать'} basePath="/options" />
    </Datagrid>
  </List>
);

export const OptionsEdit = (props) => (
  <Edit title={'Редактирование опции'} {...props}>
    <SimpleForm>
      <TextInput label={'Название'} validate={[required]} source="name" />
      <TextInput label={'Короткое первью'} validate={[required]} source="description" />
    </SimpleForm>
  </Edit>
);

