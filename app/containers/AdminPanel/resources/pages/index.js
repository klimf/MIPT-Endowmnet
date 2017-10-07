import React from 'react';
import {
  List,
  Datagrid,
  Create,
  Edit,
  TextField,
  EditButton,
  SimpleForm,
} from 'admin-on-rest';

import Editor from '../../Editor';


export const PagesList = (props) => (
  <List title={'Страницы'} {...props}>
    <Datagrid>
      <TextField label={'Название'} source="name" />
      <TextField label={'Короткое превью'} source="description" />
      <EditButton label={'Редактировать'} basePath="/pages" />
    </Datagrid>
  </List>
);

export const PagesEdit = (props) => (
  <Edit title={'Редактирование страницы'} {...props}>
    <SimpleForm>
      <Editor></Editor>
    </SimpleForm>
  </Edit>
);

export const PagesCreate = (props) => (
  <Create title={'Создание страницы'} {...props}>
    <SimpleForm>
      <Editor></Editor>
    </SimpleForm>
  </Create>
);
