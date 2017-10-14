import React from 'react';
import {
  List,
  Datagrid,
  Create,
  Edit,
  TextField,
  EditButton,
  TextInput,
  NumberInput,
  SimpleForm,
} from 'admin-on-rest';
import { required } from '../validation';

export const NavigationList = (props) => (
  <List title={'Панель навигации'} {...props} pagination={null}>
    <Datagrid>
      <TextField label={'Название'} source="name" />
      <TextField label={'Ссылка'} source="url" />
      <TextField label={'Позиция в меню'} source="position" />
      <EditButton label={'Редактировать'} basePath="/navigation" />
    </Datagrid>
  </List>
);

export const NavigationEdit = (props) => (
  <Edit title={'Редактирование ссылки'} {...props}>
    <SimpleForm>
      <TextInput label={'Название'} validate={[required]} source="name" />
      <TextInput label={'Ссылка'} validate={[required]} source="url" />
      <NumberInput label={'Позиция в меню'} validate={[required]} source="position" />
    </SimpleForm>
  </Edit>
);

export const NavigationCreate = (props) => (
  <Create title={'Создание ссылки'} {...props} redirect={'/navigation-layout'}>
    <SimpleForm>
      <TextInput label={'Название'} validate={[required]} source="name" />
      <TextInput label={'Ссылка'} validate={[required]} source="url" />
      <NumberInput label={'Позиция в меню'} validate={[required]} source="position" />
    </SimpleForm>
  </Create>
);
