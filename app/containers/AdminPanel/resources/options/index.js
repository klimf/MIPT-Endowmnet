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
      <TextField label={'Название'} source="id" />
      <TextField label={'Значение'} source="value" />
      <EditButton label={'Редактировать'} basePath="/domainOptions" />
    </Datagrid>
  </List>
);

export const OptionsEdit = (props) => (
  <Edit title={'Редактирование опции'} {...props}>
    <SimpleForm>
      <TextField label={'Название'} source="id" />
      <TextInput label={'Значение'} validate={[required]} source="value" />
    </SimpleForm>
  </Edit>
);

