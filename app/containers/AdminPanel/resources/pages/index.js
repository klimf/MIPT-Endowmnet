import React from 'react';
import {
  List,
  Datagrid,
  Create,
  Edit,
  TextField,
  EditButton,
  SimpleForm,
  TextInput,
} from 'admin-on-rest';
import { required, onlyLatin } from '../validation';

import Editor from '../../Editor';


export const PagesList = (props) => (
  <List title={'Страницы'} {...props}>
    <Datagrid>
      <TextField label={'Название'} source="name" />
      <TextField label={'Описание'} source="description" />
      <TextField label={'ссылка'} source="pageName" />
      <EditButton label={'Редактировать'} basePath="/pages" />
    </Datagrid>
  </List>
);

export const PagesEdit = (props) => (
  <Edit title={'Редактирование страницы'} {...props}>
    <SimpleForm>
      <TextInput label={'Название'} validate={[required]} source="name" />
      <TextInput label={'Описание'} validate={[required]} source="description" />
      <TextInput label={'ссылка'} validate={[required, onlyLatin]} source="pageName" />
      <Editor source={'content'} validate={[required]}></Editor>
    </SimpleForm>
  </Edit>
);

export const PagesCreate = (props) => (
  <Create title={'Создание страницы'} {...props}>
    <SimpleForm>
      <TextInput label={'Название'} validate={[required]} source="name" />
      <TextInput label={'Описание'} validate={[required]} source="description" />
      <TextInput label={'ссылка'} validate={[required, onlyLatin]} source="pageName" />
      <Editor source={'content'} validate={[required]}></Editor>
    </SimpleForm>
  </Create>
);
